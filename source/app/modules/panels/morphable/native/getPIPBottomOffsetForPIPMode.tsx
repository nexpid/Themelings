// app/modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    mike = mike.PIP_WINDOW_OFFSET;
    var _closure1_slot0 = mike;
    report = {};
    options = "function getPIPBottomOffsetForPIPMode_getPIPBottomOffsetForPIPModeTsx1(screenName){const{DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,PIP_AVOIDANCE_TAB_BAR_HEIGHT}=this.__closure;switch(screenName){case'panels':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'channel':return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;case'messages':case'notifications':case'main_tab':case'guilds':return PIP_AVOIDANCE_TAB_BAR_HEIGHT+PIP_WINDOW_OFFSET;default:return 0;}}";
    report['code'] = options;
    tango = function(argFoo) { // Original name: _
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = 'panels';
            if(!(entity !== mike)) { _fun00002_ip = 75; continue _fun00001 }
 13:
            entity = 'channel';
            if(!(entity !== mike)) { _fun00002_ip = 75; continue _fun00001 }
 21:
            entity = 'messages';
            if(!(entity !== mike)) { _fun00002_ip = 59; continue _fun00001 }
 29:
            entity = 'notifications';
            if(!(entity !== mike)) { _fun00002_ip = 59; continue _fun00001 }
 37:
            entity = 'main_tab';
            if(!(entity !== mike)) { _fun00002_ip = 59; continue _fun00001 }
 47:
            entity = 'guilds';
            if(!(entity !== mike)) { _fun00002_ip = 59; continue _fun00001 }
 55:
            entity = 0;
            return entity;
 59:
            mike = _closure1_slot0;
            entity = 46;
            entity = entity + mike;
            return entity;
 75:
            mike = _closure1_slot0;
            entity = 60;
            entity = entity + mike;
            return entity;
        }
    };
    options = {'DEFAULT_CHANNEL_INPUT_HEIGHT': 60, 'PIP_WINDOW_OFFSET': null, 'PIP_AVOIDANCE_TAB_BAR_HEIGHT': 46};
    options['PIP_WINDOW_OFFSET'] = mike;
    mike = 46;
    tango['__closure'] = options;
    options = 7115458448589.0;
    tango['__workletHash'] = options;
    tango['__initData'] = report;
    report = 1;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['PIP_AVOIDANCE_TAB_BAR_HEIGHT'] = mike;
    return entity;
})();