function second_stage_join() {
    document.getElementById("stage_1").classList.remove("num-active");
    document.getElementById("stage_2").classList.add("num-active");
    document.getElementById("stage_3").classList.remove("num-active");

  }
  function second_stage_create() {
    document.getElementById("stage_1").classList.remove("num-active");
    document.getElementById("stage_2").classList.add("num-active");
    document.getElementById("stage_3").classList.remove("num-active");

  }
  function third_stage_create() {
      document.getElementById("stage_1").classList.remove("num-active");
      document.getElementById("stage_2").classList.remove("num-active");
      document.getElementById("stage_3").classList.add("num-active");
   
  }


  export default {second_stage_join,second_stage_create,third_stage_create}