// app/modules/forums/native/composer/hooks/useCurrentKeyboardInfo.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/native/composer/hooks/useCurrentKeyboardInfo.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useCurrentKeyboardInfo
        _fun87404: for(var _fun87404_ip = 0; ; ) switch(_fun87404_ip) {
 0:
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 2;
            entity = tango[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            entity = entity.bind(zulu)();
            oscar = entity.bottom;
            mike = _closure1_slot0;
            entity = 3;
            entity = tango[entity];
            tango = mike.bind(zulu)(entity);
            zulu = tango.useStateFromStoresObject;
            entity = _closure1_slot3;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = {};
                mike = _closure1_slot3;
                zulu = mike.keyboardType;
                entity['keyboardType'] = zulu;
                zulu = mike.expressionType;
                entity['expressionType'] = zulu;
                zulu = mike.keyboardOpen;
                entity['keyboardOpen'] = zulu;
                zulu = mike.keyboardHeight;
                entity['keyboardHeight'] = zulu;
                mike = mike.customKeyboardHeight;
                entity['customKeyboardHeight'] = mike;
                return entity;
            };
            golf = zulu.bind(tango)(mike, entity);
            tango = golf.keyboardType;
            zulu = golf.expressionType;
            mike = golf.keyboardOpen;
            entity = golf.keyboardHeight;
            options = golf.customKeyboardHeight;
            golf = _closure1_slot4;
            golf = golf.SYSTEM;
            if(!(tango !== golf)) { _fun87404_ip = 182; continue _fun87404 }
 127:
            golf = _closure1_slot4;
            golf = golf.MEDIA;
            verify = tango === golf;
            if(verify) { _fun87404_ip = 158; continue _fun87404 }
 144:
            report = _closure1_slot4;
            report = report.EXPRESSION;
            verify = tango === report;
 158:
            if(!verify) { _fun87404_ip = 167; continue _fun87404 }
 161:
            report = 0;
            verify = options > report;
 167:
            golf = null;
            report = 0;
            if(!verify) { _fun87404_ip = 196; continue _fun87404 }
 174:
            golf = tango;
            report = options;
            _fun87404_ip = 196; continue _fun87404;
 182:
            options = null;
            if(!mike) { _fun87404_ip = 190; continue _fun87404 }
 187:
            options = tango;
 190:
            golf = options;
            report = entity;
 196:
            entity = {};
            entity['currentKeyboardHeight'] = report;
            report = null;
            golf = report == golf;
            report = 0;
            if(!golf) { _fun87404_ip = 217; continue _fun87404 }
 214:
            report = oscar;
 217:
            entity['currentSafeAreaBottom'] = report;
            entity['keyboardType'] = tango;
            entity['expressionType'] = zulu;
            entity['keyboardOpen'] = mike;
            return entity;
        }
    };
    zulu['useCurrentKeyboardInfo'] = mike;
    return entity;
})();