// app/modules/phone/PhoneOrEmailUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = {};
    entity = 'phone';
    tango['PHONE'] = entity;
    entity = 'email';
    tango['EMAIL'] = entity;
    var _closure1_slot0 = tango;
    entity = /^[-() \d]+$/;
    var _closure1_slot1 = entity;
    report = argPlugh;
    entity = 0;
    oscar = report[entity];
    report = argBar;
    entity = undefined;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/phone/PhoneOrEmailUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['PhoneOrEmailSelectorForceMode'] = tango;
    tango = function(argFoo, argBar) { // Original name: shouldShowCountryCodeSelector
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            tango = argBar;
            entity = _closure1_slot0;
            entity = entity.PHONE;
            if(!(mike !== entity)) { _fun00002_ip = 77; continue _fun00001 }
 23:
            entity = _closure1_slot0;
            entity = entity.EMAIL;
            entity = mike !== entity;
            if(!entity) { _fun00002_ip = 75; continue _fun00001 }
 40:
            report = tango.length;
            mike = 3;
            report = report < mike;
            mike = !report;
            if(report) { _fun00002_ip = 72; continue _fun00001 }
 58:
            report = _closure1_slot1;
            zulu = report.test;
            mike = zulu.bind(report)(tango);
 72:
            entity = mike;
 75:
            _fun00002_ip = 95; continue _fun00001;
 77:
            zulu = tango.startsWith;
            mike = '+';
            mike = zulu.bind(tango)(mike);
            entity = !mike;
 95:
            return entity;
        }
    };
    zulu['shouldShowCountryCodeSelector'] = tango;
    mike = function(argFoo) { // Original name: getPhoneOrEmail
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = /^\+\d/;
            mike = zulu.test;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            mike = _closure1_slot0;
            if(entity) { _fun00004_ip = 45; continue _fun00003 }
 37:
            entity = mike.EMAIL;
            _fun00004_ip = 51; continue _fun00003;
 45:
            entity = mike.PHONE;
 51:
            return entity;
        }
    };
    zulu['getPhoneOrEmail'] = mike;
    return entity;
})();