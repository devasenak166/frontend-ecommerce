import React from 'react'

const Email = () => {
  return (
    <div><div class="text-secondary px-4 py-5 text-center" style={{  backgroundColor:' #fcf5f5'}}>
    <div class="py-5">
      <h1 class="display-5 fw-bold text-secondary">Dark color hero</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label fw-bold fs-5">Email</label>
  </div>
  <div class="col-auto">
    <input type="email" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
  </div>
 
</div>
          <button type="button" class="btn btn-outline-success btn-sm px-4 me-sm-3 fw-bold" >send</button>
         
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Email