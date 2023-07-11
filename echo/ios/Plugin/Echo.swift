import Foundation

@objc public class Echo: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
    
//    @objc public func openSomething(_ value: TestStruct) -> String {
//        
//        let jsonData = try JSONEncoder().encode(testStruct)
//        let jsonString = String(data: jsonData, encoding: .utf8)!
//        print(jsonString) // [{"sentence":"Hello world","lang":"en"},{"sentence":"Hallo Welt","lang":"de"}]
//        
//        return value
//    }
    
//    public func openSomething(_ value: TestClass) -> String {
//        let jsonData = try JSONEncoder().encode(value)
//        let jsonString = String(data: jsonData, encoding: .utf8)!
//        print(jsonString) // [{"sentence":"Hello world","lang":"en"},{"sentence":"Hallo Welt","lang":"de"}]
//
//        return jsonString
//    }
}
