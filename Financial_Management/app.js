var AppController = {
    int: function () {
        document.querySelector('.add__btn').addEventListener('click',addItem);
        function addItem() {
            var dataformUI = UIController.getInput();
            BudgetController.addItem(dataformUI);
            UIController.displayAddItem(dataformUI);
        }
        document.addEventListener('keypress', function(event){
            if(event.keyCode == 13 || event.which == 13)
            {
                var dataformUI = UIController.getInput();
                BudgetController.addItem(dataformUI);
                UIController.displayAddItem(dataformUI);
            }
        })
    },
}

AppController.int()

var UIController = {
    getDomString: function(key) {
        var domString = {
            selectClassName: '.add__type',
            descClassName: '.add__description',
            valueClassName: '.add__value',
            income__list: '.income__list',
            expenses__list: '.expenses__list',
        }
        return domString;
    },
    getInput: function() {
        var data = {
            type: document.querySelector(this.getDomString().selectClassName).value,
            desc: document.querySelector(this.getDomString().descClassName).value,
            money: document.querySelector(this.getDomString().valueClassName).value
        }
        return data;
    },
    displayAddItem: function(data) {
        var html, newhtml, id;
        if(data.type == 'inc')
        {
            if(BudgetController.incomeList.length > 0)
            {
               id = BudgetController.incomeList.length;
            }
            else{
                id = 0;
            }
            html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        }
        else{
            html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">%percent%%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        }
        newhtml = html.replace('%description%', data.desc);
        newhtml = newhtml.replace('%value%', data.money);
        newhtml = newhtml.repeat('%id%', id);
        
        if(data.type == 'inc') {
            document.querySelector(this.getDomString().income__list).insertAdjacentHTML('beforeend',newhtml);
        }
        else{
            document.querySelector(this.getDomString().expenses__list).insertAdjacentHTML('beforeend',newhtml);
        }
//        document
//        newhtml = newhtml.repeat('%percent%')
        
        
//        if()
    }
}

var BudgetController = {
    total: 0,
    income: 0,
    expenses: 0,
    incomeList:[
    
    ],
    expensesList: [
        
    ],
    incomeProcess: function(type, data) {
        if(type == 'add'){
            this.incomeList.push(data);
        }
        else{
            this.incomeList.slice(data,1);
        }
    },
    expensesProcess: function(type, data) {
        if(type == 'add'){
            this.expensesList.push(data);
        }
        else{
            this.expensesList.slice(data,1);
        }
    },
    addItem: function(data) {
        if(data.type == 'int'){
            this.incomeList.push(data);
//            console.log('incomeList' + this.incomeList);
        }
        else{
            this.expensesList.push(data);
        }
    }
//    calule
}
