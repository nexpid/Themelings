// app/modules/application_commands/ApplicationCommandChoiceUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    report = function(argFoo, argBar) { // Original name: findChoiceStringValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            tango = null;
            report = tango == oscar;
            mike = undefined;
            entity = undefined;
            if(report) { _fun00002_ip = 54; continue _fun00001 }
 25:
            report = oscar.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.displayName;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            zulu = report.bind(oscar)(zulu);
            tango = tango == zulu;
            entity = undefined;
            if(tango) { _fun00002_ip = 54; continue _fun00001 }
 49:
            entity = zulu.value;
 54:
            tango = 'string';
            zulu = typeof entity;
            if(!(tango !== zulu)) { _fun00002_ip = 67; continue _fun00001 }
 65:
            return mike;
 67:
            return entity;
        }
    };
    var _closure1_slot3 = report;
    tango = function(argFoo, argBar) { // Original name: findChoiceNumberValue
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscar = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            tango = null;
            report = tango == oscar;
            mike = undefined;
            entity = undefined;
            if(report) { _fun00004_ip = 54; continue _fun00003 }
 25:
            report = oscar.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.displayName;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            zulu = report.bind(oscar)(zulu);
            tango = tango == zulu;
            entity = undefined;
            if(tango) { _fun00004_ip = 54; continue _fun00003 }
 49:
            entity = zulu.value;
 54:
            tango = 'number';
            zulu = typeof entity;
            if(!(tango !== zulu)) { _fun00004_ip = 67; continue _fun00003 }
 65:
            return mike;
 67:
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, oscar);
    entity = 0;
    verify = options[entity];
    oscar = argBaz;
    entity = undefined;
    oscar = oscar.bind(entity)(verify);
    var _closure1_slot0 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.FALSE_OPTION_NAME;
    var _closure1_slot1 = verify;
    oscar = oscar.TRUE_OPTION_NAME;
    var _closure1_slot2 = oscar;
    oscar = 2;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/application_commands/ApplicationCommandChoiceUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: toChoiceBooleanValue
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = tango.toLowerCase;
            zulu = entity.bind(tango)();
            report = _closure1_slot2;
            entity = report.toLowerCase;
            entity = entity.bind(report)();
            entity = zulu === entity;
            zulu = tango.toLowerCase;
            zulu = zulu.bind(tango)();
            tango = _closure1_slot1;
            mike = tango.toLowerCase;
            mike = mike.bind(tango)();
            if(entity) { _fun00006_ip = 69; continue _fun00005 }
 61:
            if(!(zulu !== mike)) { _fun00006_ip = 69; continue _fun00005 }
 65:
            mike = undefined;
            return mike;
 69:
            return entity;
        }
    };
    zulu['toChoiceBooleanValue'] = oscar;
    zulu['findChoiceStringValue'] = report;
    zulu['findChoiceNumberValue'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: findAutocompleteChoiceStringValue
        tango = _closure1_slot3;
        report = _closure1_slot0;
        zulu = report.getAutocompleteLastChoices;
        mike = argFoo;
        entity = argBar;
        zulu = zulu.bind(report)(mike, entity);
        mike = undefined;
        entity = argBaz;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    zulu['findAutocompleteChoiceStringValue'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: findAutocompleteChoiceNumberValue
        tango = _closure1_slot4;
        report = _closure1_slot0;
        zulu = report.getAutocompleteLastChoices;
        mike = argFoo;
        entity = argBar;
        zulu = zulu.bind(report)(mike, entity);
        mike = undefined;
        entity = argBaz;
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    zulu['findAutocompleteChoiceNumberValue'] = mike;
    return entity;
})();