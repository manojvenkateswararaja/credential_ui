import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-paper-stepper', 'Integration | Component | ember paper stepper', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-paper-stepper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-paper-stepper}}
      template block text
    {{/ember-paper-stepper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
