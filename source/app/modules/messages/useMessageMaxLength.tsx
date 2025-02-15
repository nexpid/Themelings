// app/modules/messages/useMessageMaxLength.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getMaxMessageLength_
        _fun78322: for(var _fun78322_ip = 0; ; ) switch(_fun78322_ip) {
 0:
            report = argFoo;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.canUseIncreasedMessageLength;
            entity = report.getCurrentUser;
            entity = entity.bind(report)();
            entity = zulu.bind(tango)(entity);
            if(entity) { _fun78322_ip = 57; continue _fun78322 }
 51:
            entity = _closure1_slot5;
            _fun78322_ip = 61; continue _fun78322;
 57:
            entity = _closure1_slot4;
 61:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    golf = tango.MAX_MESSAGE_LENGTH_PREMIUM;
    var _closure1_slot4 = golf;
    tango = tango.MAX_MESSAGE_LENGTH;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/useMessageMaxLength.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useMessageMaxLength
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        entity = _closure1_slot3;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            zulu = _closure1_slot6;
            mike = _closure1_slot3;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    mike = function() { // Original name: getMaxMessageLength
        zulu = _closure1_slot6;
        mike = _closure1_slot3;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['getMaxMessageLength'] = mike;
    return entity;
})();