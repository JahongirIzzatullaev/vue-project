<template>
  <div>
    <div class="app-main-layout">
      <main class="app-content">
        <div class="app-page">
          <div>
            <div class="page-title">
              <h3>Новая запись</h3>
            </div>
            <form class="form">
              <div class="input-field">
                <select>
                  <option
                  >name cat
                  </option>
                </select>
                <label class="label-record">Выберите категорию</label>
              </div>
              <p class="p-record">
                <label>
                  <input
                      class="with-gap"
                      name="type"
                      type="radio"
                      value="income"
                  />
                  <span>Доход</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                      class="with-gap"
                      name="type"
                      type="radio"
                      value="outcome"
                  />
                  <span>Расход</span>
                </label>
              </p>
              <div class="input-field">
                <input
                    id="amount"
                    type="number"
                >
                <label for="amount">Сумма</label>
                <span class="helper-text invalid">amount пароль</span>
              </div>
              <div class="input-field">
                <input
                    id="description"
                    type="text">
                <label for="description">Описание</label>
                <span
                    class="helper-text invalid">description пароль</span>
              </div>
              <button class="btn waves-effect waves-light" type="submit">
                Создать
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </main>
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large blue" href="#">
          <i class="large material-icons">add</i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Record"
}
</script>
<style scoped>
.label-record {
  top: -42px;
}

.p-record {
  margin-top: 60px;
}
</style>