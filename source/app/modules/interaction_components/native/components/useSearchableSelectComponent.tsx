// app/modules/interaction_components/native/components/useSearchableSelectComponent.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/interaction_components/native/components/useSearchableSelectComponent.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useSearchableSelectComponent
        michal = argFoo;
        entity = michal.selectActionComponent;
        var _closure2_slot0 = entity;
        kiloes = michal.messageId;
        var _closure2_slot1 = kiloes;
        tangon = michal.messageFlags;
        var _closure2_slot2 = tangon;
        tangon = michal.applicationId;
        var _closure2_slot3 = tangon;
        tangon = michal.channelId;
        var _closure2_slot4 = tangon;
        backup = michal.guildId;
        var _closure2_slot5 = backup;
        tangon = michal.queryOptions;
        var _closure2_slot6 = tangon;
        offset = _closure1_slot4;
        oscard = offset.useState;
        michal = '';
        michal = oscard.bind(offset)(michal);
        romeon = _closure1_slot3;
        verify = undefined;
        option = 2;
        michal = romeon.bind(verify)(michal, option);
        oscard = 0;
        yankee = michal[oscard];
        var _closure2_slot7 = yankee;
        golfie = 1;
        michal = michal[golfie];
        foxtra = _closure1_slot0;
        report = _closure1_slot2;
        report = report[option];
        foxtra = foxtra.bind(verify)(report);
        report = foxtra.getInitialSnowflakeSelectOptions;
        report = report.bind(foxtra)(entity, kiloes, backup);
        var _closure2_slot8 = report;
        foxtra = offset.useState;
        report = function() {
            entity = global;
            zuuluu = entity.Map;
            tangon = _closure2_slot8;
            michal = tangon.map;
            entity = function(argFoo) {
                michal = argFoo;
                zuuluu = michal.value;
                entity = new Array(2);
                entity[0] = zuuluu;
                entity[1] = michal;
                return entity;
            };
            report = michal.bind(tangon)(entity);
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            oscard = michal;
            entity = new oscard[zuuluu](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        report = foxtra.bind(offset)(report);
        option = romeon.bind(verify)(report, option);
        report = option[oscard];
        var _closure2_slot9 = report;
        option = option[golfie];
        var _closure2_slot10 = option;
        verify = offset.useMemo;
        option = new Array(2);
        option[0] = yankee;
        option[1] = tangon;
        tangon = function() {
            zuuluu = _closure2_slot6;
            michal = _closure2_slot7;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        tangon = verify.bind(offset)(tangon, option);
        entity = entity.maxValues;
        entity = entity > golfie;
        var _closure2_slot11 = entity;
        entity = function(argFoo) { // Original name: submitSelection
            michal = argFoo;
            golfie = {};
            verify = _closure2_slot0;
            entity = verify.type;
            golfie['type'] = entity;
            entity = michal.values;
            romeon = entity.bind(michal)();
            entity = new Array(0);
            yankee = 0;
            foxtra = entity;
            michal = arraySpread(foxtra, romeon, yankee);
            golfie['selectedOptions'] = entity;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 3;
            zuuluu = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(zuuluu);
            report = oscard.executeMessageComponentInteraction;
            zuuluu = {};
            offset = verify.type;
            zuuluu['componentType'] = offset;
            offset = _closure2_slot1;
            zuuluu['messageId'] = offset;
            offset = _closure2_slot2;
            zuuluu['messageFlags'] = offset;
            offset = verify.customId;
            zuuluu['customId'] = offset;
            verify = verify.id;
            zuuluu['componentId'] = verify;
            verify = _closure2_slot3;
            zuuluu['applicationId'] = verify;
            verify = _closure2_slot4;
            zuuluu['channelId'] = verify;
            option = _closure2_slot5;
            zuuluu['guildId'] = option;
            zuuluu['localState'] = golfie;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = _closure1_slot1;
            michal = 4;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.hideActionSheet;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        var _closure2_slot12 = entity;
        entity = {};
        entity['options'] = tangon;
        tangon = report.values;
        output = tangon.bind(report)();
        tangon = new Array(0);
        result = tangon;
        sizing = 0;
        report = arraySpread(result, output, sizing);
        entity['selectedOptions'] = tangon;
        tangon = function(argFoo) { // Original name: isSelected
            zuuluu = _closure2_slot9;
            michal = zuuluu.has;
            entity = argFoo;
            entity = entity.value;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['isSelected'] = tangon;
        tangon = function(argFoo, argBar) { // Original name: onPressOptionItem
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argBar;
                var _closure3_slot0 = report;
                oscard = _closure2_slot9;
                tangon = oscard.has;
                zuuluu = report.value;
                zuuluu = tangon.bind(oscard)(zuuluu);
                var _closure3_slot1 = zuuluu;
                tangon = _closure2_slot11;
                if(tangon) { _fun00002_ip = 136; continue _fun00001 }
 42:
                oscard = _closure2_slot12;
                tangon = global;
                tangon = tangon.Map;
                if(zuuluu) { _fun00002_ip = 107; continue _fun00001 }
 57:
                option = report.value;
                golfie = new Array(2);
                golfie[0] = option;
                golfie[1] = report;
                report = new Array(1);
                report[0] = golfie;
                golfie = tangon.prototype;
                golfie = Object.create(golfie, {constructor: {value: tangon}});
                offset = golfie;
                verify = report;
                report = new offset[tangon](verify, option);
                report = report instanceof Object ? report : golfie;
                _fun00002_ip = 127; continue _fun00001;
 107:
                golfie = tangon.prototype;
                golfie = Object.create(golfie, {constructor: {value: tangon}});
                offset = golfie;
                tangon = new offset[tangon](verify);
                report = tangon instanceof Object ? tangon : golfie;
 127:
                tangon = undefined;
                tangon = oscard.bind(tangon)(report);
                _fun00002_ip = 186; continue _fun00001;
 136:
                zuuluu = !zuuluu;
                if(!zuuluu) { _fun00002_ip = 165; continue _fun00001 }
 142:
                tangon = _closure2_slot9;
                report = tangon.size;
                tangon = _closure2_slot0;
                tangon = tangon.maxValues;
                zuuluu = report >= tangon;
 165:
                if(zuuluu) { _fun00002_ip = 186; continue _fun00001 }
 168:
                zuuluu = _closure2_slot10;
                michal = undefined;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = global;
                        zuuluu = entity.Map;
                        entity = zuuluu.prototype;
                        michal = Object.create(entity, {constructor: {value: zuuluu}});
                        golfie = argFoo;
                        option = michal;
                        entity = new option[zuuluu](golfie, oscard);
                        entity = entity instanceof Object ? entity : michal;
                        zuuluu = _closure3_slot1;
                        if(zuuluu) { _fun00004_ip = 63; continue _fun00003 }
 41:
                        report = entity.set;
                        tangon = _closure3_slot0;
                        zuuluu = tangon.value;
                        zuuluu = report.bind(entity)(zuuluu, tangon);
                        _fun00004_ip = 82; continue _fun00003;
 63:
                        zuuluu = entity.delete;
                        michal = _closure3_slot0;
                        michal = michal.value;
                        michal = zuuluu.bind(entity)(michal);
 82:
                        return entity;
                    }
                };
                entity = zuuluu.bind(michal)(entity);
 186:
                entity = undefined;
                return entity;
            }
        };
        entity['onPressOptionItem'] = tangon;
        zuuluu = function() { // Original name: submitSelection
            zuuluu = _closure2_slot12;
            michal = _closure2_slot9;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity['submitSelection'] = zuuluu;
        entity['setQuery'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();