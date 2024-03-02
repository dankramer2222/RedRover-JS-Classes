// Напишите функцию, которая принимает название типа тестирования, и возвращает определение этого типа тестирования с соответствии с Силлабусом 4.0. International Software Testing Qualifications Board.  
// https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB_CTFL_Syllabus-v4.0.pdf 

function getTestType(testDef){
    switch(testDef.toLowerCase()){
        case "functional testing":
            return "Functional testing evaluates the functions that a component or system should perform. The functions are “what” the test object should do. The main objective of functional testing is checking the functional completeness, functional correctness and functional appropriateness. Non-functional testing evaluates attributes other than functional characteristics of a component or system.";
        case "non-functional testing":
            return `Non-functional testing is the testing of “how well the system behaves”. The main objective of nonfunctional testing is checking the non-functional software quality characteristics. The ISO/IEC 25010 standard provides the following classification of the non-functional software quality characteristics:  
            • Performance efficiency
            • Compatibility
            • Usability
            • Reliability
            • Security
            • Maintainability
            • Portability
            It is sometimes appropriate for non-functional testing to start early in the life cycle (e.g., as part of reviews and component testing or system testing). Many non-functional tests are derived from functional tests as they use the same functional tests, but check that while performing the function, a non-functional constraint is satisfied (e.g., checking that a function performs within a specified time, or a function can be ported to a new platform). The late discovery of non-functional defects can pose a serious threat to the success of a project. Non-functional testing sometimes needs a very specific test environment, such as a usability lab for usability testing.`;
        case "black-box testing":
            return "Black-box testing is specification-based and derives tests from documentation external to the test object. The main objective of black-box testing is checking the system's behavior against its specifications.";
        case "white-box testing":
            return "White-box testing is structure-based and derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows). The main objective of white-box testing is to cover the underlying structure by the tests to the acceptable level.";
        default:
            return "This type of testing has not been found.";
    }
}
console.log(getTestType("White-box testing"));
console.log(getTestType("non-functional testing"))

//json option

// const testTypeDefinitions = {
//     "функциональное тестирование": "Функциональное тестирование оценивает функции, которые компонент или система должны выполнять. Функции дают ответ на вопрос «что делает система». Основная цель функционального тестирования — это проверка функциональной полноты, функциональной правильности и функционального соответствия.",
//     "нефункциональное тестирование": "Нефункциональное тестирование оценивает признаки компонента или системы, отличные от функциональных характеристик. Нефункциональное тестирование – это проверка того, «насколько хорошо работает система». Основная цель - нефункционального тестирования — это проверка нефункциональных характеристик качества программного обеспечения.",
//     "тестирование методом черного ящика": "Тестирование методом черного ящика основано на поведении и внешней по отношению к объекту тестирования документации. Основная цель тестирования методом черного ящика — это проверка соответствия поведения системы ее спецификациям.",
//     "тестирование методом белого ящика": "Тестирование методом белого ящика основано на реализации системы или ее внутренней структуре (например, программном коде, архитектуре, принципах работы и потоках данных). Основная цель тестирования методом белого ящика - покрыть основную структуру тестами на приемлемом уровне."
// };

// function getTestTypeDefinition(testType) {
//     const definition = testTypeDefinitions[testType.toLowerCase()];
//     return definition ? definition : "Тип тестирования не найден.";
// }

// console.log(getTestTypeDefinition("тестирование методом черного ящика"));
