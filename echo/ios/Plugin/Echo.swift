import Foundation

@objc public class Echo: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
    
    // notice that the @obc decorator is removed
    public func openSomethingStruct(_ value: TestStruct) -> String {
                let jsonData = try! JSONEncoder().encode(value)
                let jsonString = String(data: jsonData, encoding: .utf8)!
        return jsonString
    }
    
    @objc public func openSomethingClass(_ value: TestClass) -> String {
        let jsonData = try! JSONEncoder().encode(value)
        let jsonString = String(data: jsonData, encoding: .utf8)!

        return jsonString
    }
}
