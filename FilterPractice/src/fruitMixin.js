export const fruitMixin = {
      data() {
        return {
            text: 'hello there!',
            fruits: ['Apple','Bananas','Mango','Melon'],
            filterText: ''
        }
    },
    filters: {
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            })
        },
        created() {
          console.log('created')
        }
    }
}