'use strict';

function(){
	function LinkedList(){



	LinkedList.prototype.addToEnd = function(data){
		
		var current = this.head;
			var newnode = {
				data : data,
				next : null
			}
			console.log(data);
		this.head = null;
		console.log(this.head);

		if (this.head == null)
		{
			console.log('here');
			this.head = newnode;
			
		}
		else 
		{	
			
			console.log('here 2');
			while(current.next != null)
			{
				current = current.next;
			
			}			
			current.next = newnode;	
		}
		console.log('inserted' + data);
	}
	LinkedList.prototype.addToFront = function(data)
	{
		var newnode = {
			data : data,
			next : this.head
		}
		this.head = newnode;
		console.log('addToFront'+data);
	}

	LinkedList.prototype.remove = function(val){
		var current = this.head;

		if (current.data == val)
		{
			this.head = current.next;

		}
		else{
			
			while(current.next == val)
			{
				var previous = current;
				current = current.next;
				previous.next = current.next;
			}
			current = current.next;
			console.log('remove');
			
	}

	LinkedList.prototype.search = function(val){
		var current = this.head;
		if (current.data == val)
		{
			console.log('found' + val);
		}

	}

	LinkedList.prototype.isEmpty = function(){

		if(this.head == null )
		{
			console.log('list is empty');
		}
		else
		{
			console.log('list is not empty');
		}
	}

	LinkedList.prototype.print = function(){

		if(this.head == null)
		{
			console.log('list is empty');
		} 
		else
		{

		while(this.head.next != null)
		{
			console.log(this.head.data);
			this.head=this.head.next;
			
		}
	}
	}
}
}
var l1 = new LinkedList();
l1.addToEnd(10);

l1.addToFront(5);
l1.addToFront(20);

l1.remove(10);
l1.search(5);
l1.isEmpty();
l1.print();
debugger;
}