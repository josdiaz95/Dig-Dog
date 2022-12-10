$(setupPage);

function setupPage() {
    $("form").on("submit",  table);
    $("table").on("click",digDog);
}


function table(event) {
    event.preventDefault();

    let grid = $("input#numberOfSquares").val();

    do{
        for (let j = 0; j < grid; j++) {
            let row = $("<tr>");
            $("table").append(row);

                for (let j = 0; j < grid; j++) {
                    let hideBone = Math.random();
                    if (hideBone < 0.3) {
                        let column = $("<td>").addClass('hidden-bone');
                        row.append(column);

                    }
                    else  {
                        let column2 =$("<td>");
                            row.append(column2);

                     }

                 }

            let bones = $('.hidden-bone').length-1;
            $('#remaining').text(bones);

        }

    }while (grid.count());

}

function digDog(event){
    event.preventDefault();
    let cell = event.target;
    if (cell.className === 'hidden-bone'){
        $(event.target).addClass('dug-bone');
        let bonesHidden = $('.hidden-bone').length-1;
        let bonesFound = $('.dug-bone').length-1;
        let boneRemaining= bonesHidden - bonesFound;
        $('#remaining').text(boneRemaining);

        if(boneRemaining === 0){
            $('#horray').text("YAY!! You dug up all of the bones!")
        }

    }
    else {
        $(event.target).addClass('dug');
    }

}

