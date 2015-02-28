(function () {
    var vocabularyController = function ($scope) {
        var randomWord = function () {
            var randomInt = Math.floor(Math.random() * dictionary.words.length);
            //console.log(randomInt);
            //console.log('length', dictionary.words.length);
            $scope.word = dictionary.words[randomInt];
        };
        randomWord();
        $scope.inputWord = function () {
            console.log($scope.wordModel);
            if ($scope.word.english === $scope.wordModel) {
                $scope.wordModel = "";
                randomWord();
            }
        }
    };

    vocabularyController.$inject = ['$scope'];

    var enVocabulary = function () {
        return {
            controller: vocabularyController
        }
    };

    angular.module('english').directive('enVocabulary', enVocabulary);
})();
