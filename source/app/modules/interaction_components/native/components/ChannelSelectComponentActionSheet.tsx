// app/modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/interaction_components/native/components/ChannelSelectComponentActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        entity = argFoo;
        backup = entity.messageId;
        romeon = entity.messageFlags;
        offset = entity.applicationId;
        report = entity.channelId;
        var _closure2_slot0 = report;
        verify = entity.guildId;
        var _closure2_slot1 = verify;
        yankee = entity.selectionActionComponent;
        michal = yankee.channelTypes;
        var _closure2_slot2 = michal;
        golfie = _closure1_slot3;
        tangon = golfie.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = report;
        zuuluu[1] = michal;
        michal = function(argFoo) {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.queryChannels;
            zuuluu = _closure2_slot0;
            michal = _closure2_slot2;
            entity = argFoo;
            entity = tangon.bind(report)(entity, zuuluu, michal);
            return entity;
        };
        option = tangon.bind(golfie)(michal, zuuluu);
        michal = _closure1_slot1;
        foxtra = _closure1_slot2;
        zuuluu = 5;
        zuuluu = foxtra[zuuluu];
        tangon = undefined;
        golfie = michal.bind(tangon)(zuuluu);
        zuuluu = {};
        zuuluu['selectActionComponent'] = yankee;
        zuuluu['messageId'] = backup;
        zuuluu['messageFlags'] = romeon;
        zuuluu['applicationId'] = offset;
        zuuluu['channelId'] = report;
        zuuluu['guildId'] = verify;
        zuuluu['queryOptions'] = option;
        zuuluu = golfie.bind(tangon)(zuuluu);
        offset = zuuluu.options;
        verify = zuuluu.selectedOptions;
        option = zuuluu.isSelected;
        romeon = zuuluu.onPressOptionItem;
        golfie = zuuluu.submitSelection;
        var _closure2_slot3 = golfie;
        golfie = zuuluu.setQuery;
        zuuluu = _closure1_slot6;
        entity = 6;
        entity = foxtra[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        entity['onPressOptionItem'] = romeon;
        romeon = function(argFoo) { // Original name: renderIcon
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot4;
                michal = tangon.getChannel;
                entity = argFoo;
                entity = entity.value;
                golfie = michal.bind(tangon)(entity);
                entity = null;
                if(!(entity != golfie)) { _fun00002_ip = 131; continue _fun00001 }
 31:
                report = _closure1_slot5;
                tangon = report.getGuild;
                michal = _closure2_slot1;
                report = tangon.bind(report)(michal);
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 7;
                michal = oscard[michal];
                oscard = undefined;
                tangon = tangon.bind(oscard)(michal);
                michal = tangon.getChannelIconData;
                golfie = michal.bind(tangon)(golfie, report);
                michal = entity != golfie;
                if(!michal) { _fun00002_ip = 129; continue _fun00001 }
 93:
                report = _closure1_slot6;
                tangon = _closure1_slot1;
                option = _closure1_slot2;
                zuuluu = 8;
                zuuluu = option[zuuluu];
                tangon = tangon.bind(oscard)(zuuluu);
                zuuluu = {};
                zuuluu['source'] = golfie;
                michal = report.bind(oscard)(tangon, zuuluu);
 129:
                return michal;
 131:
                return entity;
            }
        };
        entity['renderIcon'] = romeon;
        entity['selectionActionComponent'] = yankee;
        entity['options'] = offset;
        offset = verify.length;
        entity['selectedCount'] = offset;
        entity['selectedOptions'] = verify;
        entity['isSelected'] = option;
        option = function() { // Original name: submitSelection
            michal = _closure2_slot3;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        };
        entity['submitSelection'] = option;
        entity['onQueryChange'] = golfie;
        oscard = function(argFoo) { // Original name: itemAccessibilityLabel
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot4;
                zuuluu = tangon.getChannel;
                michal = argFoo;
                michal = michal.value;
                tangon = zuuluu.bind(tangon)(michal);
                michal = null;
                if(!(michal == tangon)) { _fun00004_ip = 35; continue _fun00003 }
 31:
                michal = undefined;
                return michal;
 35:
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                entity['channel'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['itemAccessibilityLabel'] = oscard;
        entity['channelId'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();