<?php

class NewsletterController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
    }
    
    public function subscribeAction(){
    
       $this->_helper->viewRenderer->setNoRender();
       $this->_helper->layout()->disableLayout();
        
       $params = $this->getRequest()->getParams();

		// @todo Complete php functionality
       $email = $_POST["email"];
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          echo '<span class="incorrect">Email verification failed...</span>';
        } else {
          echo '<span class="correct">Subscription successful.</span>';
        }
    }


}

