<script>
    /**
       지극히 ES5 스러운 반복문과 ES6의 반복문을 먼저 봐보자. 
     */

        const ES5_list = [1,2,3];
        for(var i = 0; i < ES5_list.length; i++){
            console.log(ES5_list[i])
        }

        const ES6_list = [1,2,3];
        for(let a of ES6_list){
            console.log(a)
        }
        /**
            결과 값은 동일하게 아래와 같을 것이다.
            1
            2
            3
            그러면 Javascript의 내장객체인 Array,Set,Map을 통해 다시한번 for..of 반복문을 실험해보자.
        */

            console.log('------Array를 통해 알아보기------')
            const Arr_arr = [1,2,3];
            for(const a of Arr_arr) console.log(a);

            console.log('------Set 통해 알아보기------')
            const Set_arr = new Set([1,2,3]);
            for(const a of Set_arr) console.log(a);

            console.log('------Map 통해 알아보기------')
            const Map_arr = new Map([ ['a',1],['b',2],['c',3] ]);
            for(const a of Map_arr) console.log(a);
        
        /**
            ES6 for...of 반복문에서도 ES5에서 처럼 i에 0,1같은 값을 할당하고 순차적으로 배열의 인덱스 키 값을 조회하는것일까?
            Arr_arr[0] 혹은 Arr_arr[1]아니면 Arr_arr[2]를 찍어보면 값은 당연히 잘나오지만 .
            Set,Map은 그러하지 않다. 당연하게 Array와는 다르고 또 다른 이유들이 있겠지만. 내가 서술하고 싶은 이터러블/이터레이터 프로토콜에 대해 서술해보겠다.
            사실 Array, Set, Map은 Javascript의 내장객체로서 Iterable,Iterator Protocol을 따르고 있다.
            먼저 용어부터 알아보면
            1.Iterable: Iterator를 return하는 [Symbol.Iterator]()를 가진 값.
            2.Iterator: {value,done} 객체를 리턴하는 next()를 가진 값
            3.Iterable/Iterator Protocol: Iterable을 for ... of, 전개 연산자 등과 함께 동작하도록 한 규약
            이렇게 서술할 수가 있다.
        */


        const arr = [1,2,3,4];
        let iter01 = arr[Symbol.iterator]();
        console.log(iter01) // 이렇게 Symbol.iterator를 찍어보면 "Array Iterator {}" 값이 콘솔에 출력되는 것을 알 수가 있다.
        //그 후 iter01.next()를 사용하면1 그리고 2 그리고 3 그리고 4 순차적으로 출력한다. 이때까지 done이라는 키에 대합 value는 false이며 그 이후로 출력을 시도하면 done은 true를 뱉고 더이상 value 키에 대한 값은 없다.

        /**
            나는 이렇게 이해하기로 했다.
            ES6에서의 for of 루프는 먼저 Symbol.iterator () 메소드를 통해 "Iterator" 객체들을 얻어낸 후 그 이후에  Iterator의 next() 통해
            값을 순회하는 것이라고 생각했다.
         */
</script>