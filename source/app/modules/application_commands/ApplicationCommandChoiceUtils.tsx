// app/modules/application_commands/ApplicationCommandChoiceUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    report = function(argFoo, argBar) { // Original name: findChoiceStringValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            tangon = null;
            report = tangon == oscard;
            michal = undefined;
            entity = undefined;
            if(report) { _fun00002_ip = 55; continue _fun00001 }
 25:
            report = oscard.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.displayName;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = tangon == zuuluu;
            entity = undefined;
            if(tangon) { _fun00002_ip = 55; continue _fun00001 }
 50:
            entity = zuuluu.value;
 55:
            tangon = 'string';
            zuuluu = typeof entity;
            if(!(tangon !== zuuluu)) { _fun00002_ip = 68; continue _fun00001 }
 66:
            return michal;
 68:
            return entity;
        }
    };
    var _closure1_slot3 = report;
    tangon = function(argFoo, argBar) { // Original name: findChoiceNumberValue
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            entity = argBar;
            var _closure2_slot0 = entity;
            tangon = null;
            report = tangon == oscard;
            michal = undefined;
            entity = undefined;
            if(report) { _fun00004_ip = 55; continue _fun00003 }
 25:
            report = oscard.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.displayName;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = tangon == zuuluu;
            entity = undefined;
            if(tangon) { _fun00004_ip = 55; continue _fun00003 }
 50:
            entity = zuuluu.value;
 55:
            tangon = 'number';
            zuuluu = typeof entity;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 68; continue _fun00003 }
 66:
            return michal;
 68:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    verify = option[entity];
    oscard = argBaz;
    entity = undefined;
    oscard = oscard.bind(entity)(verify);
    var _closure1_slot0 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.FALSE_OPTION_NAME;
    var _closure1_slot1 = verify;
    oscard = oscard.TRUE_OPTION_NAME;
    var _closure1_slot2 = oscard;
    oscard = 2;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/application_commands/ApplicationCommandChoiceUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: toChoiceBooleanValue
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = tangon.toLowerCase;
            zuuluu = entity.bind(tangon)();
            report = _closure1_slot2;
            entity = report.toLowerCase;
            entity = entity.bind(report)();
            entity = zuuluu === entity;
            zuuluu = tangon.toLowerCase;
            zuuluu = zuuluu.bind(tangon)();
            tangon = _closure1_slot1;
            michal = tangon.toLowerCase;
            michal = michal.bind(tangon)();
            if(entity) { _fun00006_ip = 69; continue _fun00005 }
 61:
            if(!(zuuluu !== michal)) { _fun00006_ip = 69; continue _fun00005 }
 65:
            michal = undefined;
            return michal;
 69:
            return entity;
        }
    };
    zuuluu['toChoiceBooleanValue'] = oscard;
    zuuluu['findChoiceStringValue'] = report;
    zuuluu['findChoiceNumberValue'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: findAutocompleteChoiceStringValue
        tangon = _closure1_slot3;
        report = _closure1_slot0;
        zuuluu = report.getAutocompleteLastChoices;
        michal = argFoo;
        entity = argBar;
        zuuluu = zuuluu.bind(report)(michal, entity);
        michal = undefined;
        entity = argBaz;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    zuuluu['findAutocompleteChoiceStringValue'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: findAutocompleteChoiceNumberValue
        tangon = _closure1_slot4;
        report = _closure1_slot0;
        zuuluu = report.getAutocompleteLastChoices;
        michal = argFoo;
        entity = argBar;
        zuuluu = zuuluu.bind(report)(michal, entity);
        michal = undefined;
        entity = argBaz;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    zuuluu['findAutocompleteChoiceNumberValue'] = michal;
    return entity;
})();