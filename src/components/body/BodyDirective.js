import { BodyController } from './BodyController';

export function BodyDirective($timeout){
  return {
    restrict: 'E',
    controller: BodyController,
    controllerAs: 'body',
    bindToController: {
      columns: '=',
      columnWidths: '=',
      rows: '=',
      options: '=',
      onPage: '&',
      onSelect: '&'
    },
    scope: true,
    template: `
      <div 
        class="progress-linear" 
        role="progressbar" 
        ng-show="body.options.paging.loadingIndicator">
        <div class="container">
          <div class="bar"></div>
        </div>
      </div>
      <div class="dt-body" ng-style="body.styles()" dt-seletion>
        <dt-scroller class="dt-body-scroller">
          <dt-row ng-repeat="r in body.tempRows track by $index"
                  row="body.getRowValue($index)"
                  columns="body.columns"
                  column-widths="body.columnWidths"
                  options="body.options"
                  ng-style="body.rowStyles(r)">
          </dt-row>
        </dt-scroller>
        <div ng-if="body.rows && !body.rows.length" 
             class="empty-row" 
             ng-bind="::body.options.emptyMessage">
       </div>
       <div ng-if="body.rows === undefined" 
             class="loading-row"
             ng-bind="::body.options.loadingMessage">
        </div>
      </div>`
  };
};
