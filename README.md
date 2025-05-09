# サーバ構築

## Domain層(domains)

- **entities**
- **errors**
- **interface**

## Application層(use case)

- **use case**

## Interface Adapter層(controller)

- **controller**
- **presenter**

## Infrastructure層(infrastructures)

- **repository**
- **payment processor** (支払い処理)
- **unit of work**　（データベースの一貫性のため）

## Driver層(handler)

- **handler**

# Control Flow

1. **外部で handler server action を呼び出す**
2. **handler がリクエストオブジェクトにベーシックバリデーションを行う**
   - 対応の **repository** オブジェクトを作成
   - 対応の **infrastructure** を作成
   - 対応の **use case** を作成し、repository や infrastructure を渡す
   - 対応の **controller** を作成し、use case を渡す
   - その **controller** を呼び出す
3. **controller がリクエストオブジェクトをエンティティオブジェクトに変換し、対応する use case を呼び出す**
4. **use case でビジネスロジックを実施し、対応の repository interface メソッドを呼び出す**

# 例: 注文作成リクエスト

## 内向きフロー 

1. **createOrderHandler (Driver & Infrastructure層)**

   - **リクエストバリデーション**
   - **Infrastructure instance 作成**
     - `product repository`
     - `order repository`
     - `unit of work`
     - `payment processor`
   - **Use case instance 作成**
     - `GetProductDetailUseCase`
       - `product repository` を渡す
     - `CreateOrderUseCase`
       - `order repository` を渡す
       - `unit of work` を渡す
       - `payment processor` を渡す
   - **CreateOrderController instance 作成**
     - `GetProductUseCase` と `CreateOrderUseCase` を渡す
   - **CreateOrderController を呼び出す**

2. **CreateOrderController(Interface Adaptor層)**

   - Request Order Object の各 product 毎に `GetProductDetailUseCase` を呼び出し
     - **price の認証** を行う
   - 認証済み Product をもって **Order Entity Object** を作成する
   - **total price の認証** を行う
   - `CreateOrderUseCase` を呼び出す
     - 作成した Order Entity Object を渡す

3. **Use Case (Application層)**

   - オペレーションを **Unit of Work** に wrap する
   - **Payment Processor** を呼び出す
   - `OrderRepository.CreateOrder` を呼び出す
     - Order Entity Object を渡す

4. **Order Repository Interface (Domain層)**
   - **CreateOrder** メソッドを呼び出す

## 外向きフロー

1. **Order Repository Interface (Domain層)**
   - 作成した Order を返す
2. **Use Case (Application層)**
   - `OrderRepository.CreateOrder` が返した Order を返す
3. **CreateOrderController (Interface Adaptor層)**
   - `CreateOrderUseCase` が返した値を **OrderPresenter** でディスプレイフォーマットに変換して返す
4. **createOrderHandler (Driver & Infrastructure層)**
   - Controller が返した値を返す


DATABASE_URL="postgresql://neondb_owner:npg_L0DzM5gbmXPJ@ep-hidden-river-a19ld4i4-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
# uncomment next line if you use Prisma <5.10
# DATABASE_URL_UNPOOLED="postgresql://neondb_owner:npg_L0DzM5gbmXPJ@ep-hidden-river-a19ld4i4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"