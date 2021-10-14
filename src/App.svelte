<script>
	import FeedbackList from "./components/feedbackList.svelte"
   let feedback = [
	   {
		   id:1,
		   rating:10,
		   text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sunt eaque! Optio placeat velit, error vitae tenetur dolores facere molestiae?"
	   },
	   {
		   id:2,
		   rating:9,
		   text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sunt eaque! consectetur adipisicing elit. Numquam, sunt eaque! Optio placeat velit, error vitae tenetur dolores facere molestiae?"
	   },
	   {
		   id:3,
		   rating:8,
		   text:"Lorem ipsum  adipisicing elit. Numquam, sunt eaque! Optio placeat velit, error vitae tenetur dolores facere molestiae?"
	   },
   ]
   $:feedbackCount = feedback.length
   $:avarage = feedback.reduce((accumalator,{rating}) => accumalator+rating,0) / feedback.length
	
   const deleteFeedbackItem = (e) => {
	let newArray = feedback.filter(item => item.id !== e.detail) 
	feedback = newArray
   }

</script>

<main class="container">
	<h1>{feedbackCount}</h1>
	<h1>{avarage}</h1>
   <FeedbackList on:delete-feedback={deleteFeedbackItem} {feedback}></FeedbackList>
</main>

<style>
   
</style>
