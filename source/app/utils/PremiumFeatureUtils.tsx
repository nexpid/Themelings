// app/utils/PremiumFeatureUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: getUserMaxFileSize
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            tango = null;
            if(!(tango != zulu)) { _fun00002_ip = 127; continue _fun00001 }
 9:
            report = _closure1_slot2;
            entity = report.getPremiumTypeOverride;
            report = entity.bind(report)();
            entity = zulu.isStaff;
            entity = entity.bind(zulu)();
            if(!entity) { _fun00002_ip = 47; continue _fun00001 }
 39:
            entity = _closure1_slot6;
            if(!(report !== entity)) { _fun00002_ip = 121; continue _fun00001 }
 47:
            entity = zulu.premiumType;
            if(!(tango != entity)) { _fun00002_ip = 93; continue _fun00001 }
 57:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 3;
            tango = tango[entity];
            entity = undefined;
            tango = report.bind(entity)(tango);
            entity = tango.isPremium;
            entity = entity.bind(tango)(zulu);
            if(entity) { _fun00002_ip = 99; continue _fun00001 }
 93:
            entity = _closure1_slot3;
            _fun00002_ip = 119; continue _fun00001;
 99:
            tango = _closure1_slot5;
            zulu = zulu.premiumType;
            zulu = tango[zulu];
            entity = zulu.fileSize;
 119:
            _fun00002_ip = 125; continue _fun00001;
 121:
            entity = _closure1_slot4;
 125:
            return entity;
 127:
            entity = _closure1_slot3;
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = golf[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.MAX_ATTACHMENT_SIZE;
    var _closure1_slot3 = options;
    tango = tango.MAX_STAFF_ATTACHMENT_SIZE;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.PremiumUserLimits;
    var _closure1_slot5 = options;
    tango = tango.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot6 = tango;
    tango = {};
    tango['getUserMaxFileSize'] = mike;
    report = 4;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/PremiumFeatureUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['getUserMaxFileSize'] = mike;
    return entity;
})();