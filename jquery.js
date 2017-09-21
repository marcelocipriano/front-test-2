		$("#conteudoTab2").css ("display", "none");
		$("#conteudoTab3").css ("display", "none");
		$("#conteudoTab1").addClass ("display", "block");
		$("#tab1").addClass ("selecionado");
					
		$("#tab1").click (function (){
					
		$("#conteudoTab1").css ("display", "block");
		$("#conteudoTab2").css ("display", "none");
		$("#conteudoTab3").css ("display", "none");
		$("#tab1").addClass ("selecionado");
		$("#tab2").removeClass ("selecionado");
		$("#tab3").removeClass ("selecionado");
					
		});

					
		$("#tab2").click (function (){
					
		$("#conteudoTab2").css ("display", "block");
		$("#conteudoTab1").css ("display", "none");
		$("#conteudoTab3").css ("display", "none");
		$("#tab1").removeClass ("selecionado");
		$("#tab2").addClass ("selecionado");
		$("#tab3").removeClass ("selecionado");
					
		});
				
		$("#tab3").click (function (){

		$("#conteudoTab2").css ("display", "none");
		$("#conteudoTab1").css ("display", "none");
		$("#conteudoTab3").css ("display", "block");
		$("#tab3").addClass ("selecionado");
		$("#tab2").removeClass ("selecionado");
		$("#tab1").removeClass ("selecionado");
		});