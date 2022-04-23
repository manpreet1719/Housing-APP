import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlDirective, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/Model/user';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private fb : FormBuilder,private userService : UserserviceService) { }

  registerationForm!: FormGroup;
  user!: User;
  userSubmitted: boolean = false;

  ngOnInit(): void {
  //   this.registerationForm = new FormGroup({
  //     userName : new FormControl('',Validators.required),
  //     email : new  FormControl('',[Validators.required,Validators.email]),
  //     password : new FormControl('',[Validators.required,Validators.minLength(8)]),
  //     confirmPassword : new FormControl('',[Validators.required]),
  //     mobile : new FormControl('',[Validators.required,Validators.maxLength(10)])
  //   },
  //   this.passwordMatch('password', 'confirmPassword')
  //  );
  this.createRegistrationForm();
  }
  createRegistrationForm(){
    this.registerationForm = this.fb.group({
      userName : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword : ['',[Validators.required]],
      mobile : ['',[Validators.required,Validators.maxLength(10)]]
    },{validators:this.passwordMatch('password', 'confirmPassword')}
    )
  }
  passwordMatch(password: string, confirmPassword: string):ValidatorFn {
    return (formGroup: AbstractControl):{ [key: string]: any } | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);
      
      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch'] ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true }
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

  onSubmit(){
    console.log(this.registerationForm.value);
    this.userSubmitted  = true;

      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
      
    if(this.registerationForm.valid){
     // this.user = Object.assign(this.user,this.registerationForm.value)
      
    }
    
  }
  userData() : User {
 
    return this.user = {
      userName : this.userName.value,
      email : this.email.value,
      password : this.password.value,
      mobile : this.mobile.value
    }
  }

  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }
}
