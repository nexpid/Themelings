// app/modules/interaction_components/ComponentStateContext.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    var _closure1_slot2 = option;
    entity = function(argFoo, argBar) { // Original name: useComponentValidatorState
        michal = argFoo;
        golfie = argBar;
        var _closure2_slot0 = michal;
        var _closure2_slot1 = golfie;
        oscard = _closure1_slot4;
        tangon = oscard.useContext;
        zuuluu = _closure1_slot16;
        tangon = tangon.bind(oscard)(zuuluu);
        var _closure2_slot2 = tangon;
        option = _closure1_slot4;
        oscard = option.useState;
        zuuluu = null;
        verify = oscard.bind(option)(zuuluu);
        option = _closure1_slot3;
        oscard = undefined;
        zuuluu = 2;
        option = option.bind(oscard)(verify, zuuluu);
        zuuluu = 0;
        zuuluu = option[zuuluu];
        oscard = 1;
        oscard = option[oscard];
        var _closure2_slot3 = oscard;
        verify = _closure1_slot4;
        option = verify.useCallback;
        oscard = new Array(1);
        oscard[0] = michal;
        michal = function(argFoo) {
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 16;
            entity = zuuluu[entity];
            zuuluu = undefined;
            report = michal.bind(zuuluu)(entity);
            tangon = _closure2_slot0;
            michal = argFoo;
            michal = report.bind(zuuluu)(tangon, michal);
            entity = _closure2_slot3;
            entity = entity.bind(zuuluu)(michal);
            entity = null;
            entity = entity == michal;
            return entity;
        };
        michal = option.bind(verify)(michal, oscard);
        var _closure2_slot4 = michal;
        oscard = _closure1_slot4;
        report = oscard.useEffect;
        option = tangon.validators;
        tangon = new Array(3);
        tangon[0] = option;
        tangon[1] = michal;
        tangon[2] = golfie;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = function() { // Original name: currentValidate
                    zuuluu = _closure2_slot4;
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                var _closure3_slot0 = tangon;
                michal = _closure2_slot2;
                zuuluu = michal.validators;
                michal = null;
                if(!(michal != zuuluu)) { _fun00002_ip = 40; continue _fun00001 }
 30:
                michal = zuuluu.add;
                michal = michal.bind(zuuluu)(tangon);
 40:
                entity = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = _closure2_slot2;
                        zuuluu = entity.validators;
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00004_ip = 36; continue _fun00003 }
 19:
                        michal = zuuluu.delete;
                        entity = _closure3_slot0;
                        entity = michal.bind(zuuluu)(entity);
 36:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            }
        };
        entity = report.bind(oscard)(entity, tangon);
        entity = {};
        entity['error'] = zuuluu;
        entity['validate'] = michal;
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: useComponentStateForMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            backup = argFoo;
            entity = argBar;
            golfie = argBaz;
            var _closure2_slot0 = backup;
            var _closure2_slot1 = golfie;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 13;
            verify = report[michal];
            oscard = undefined;
            romeon = tangon.bind(oscard)(verify);
            yankee = romeon.useStateFromStores;
            verify = _closure1_slot11;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                tangon = _closure1_slot11;
                zuuluu = tangon.getInteractionComponentState;
                michal = _closure2_slot0;
                michal = michal.id;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            verify = yankee.bind(romeon)(offset, verify);
            michal = report[michal];
            yankee = tangon.bind(oscard)(michal);
            offset = yankee.useStateFromStores;
            michal = _closure1_slot5;
            report = new Array(1);
            report[0] = michal;
            tangon = new Array(1);
            tangon[0] = backup;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getInteraction;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = offset.bind(yankee)(report, michal, tangon);
            tangon = _closure1_slot15;
            michal = backup.channel_id;
            tangon = tangon.bind(oscard)(michal);
            if(tangon) { _fun00006_ip = 138; continue _fun00005 }
 135:
            tangon = entity;
 138:
            entity = _closure1_slot17;
            entity = entity.bind(oscard)(golfie, verify);
            michal = entity.error;
            romeon = entity.validate;
            var _closure2_slot2 = romeon;
            foxtra = backup.applicationId;
            entity = null;
            if(!(entity == foxtra)) { _fun00006_ip = 185; continue _fun00005 }
 174:
            entity = backup.author;
            foxtra = entity.id;
 185:
            var _closure2_slot3 = foxtra;
            entity = {};
            entity['state'] = verify;
            yankee = _closure1_slot4;
            offset = yankee.useCallback;
            kiloes = backup.channel_id;
            verify = new Array(8);
            verify[0] = kiloes;
            kiloes = backup.flags;
            verify[1] = kiloes;
            backup = backup.id;
            verify[2] = backup;
            backup = golfie.customId;
            verify[3] = backup;
            backup = golfie.type;
            verify[4] = backup;
            backup = golfie.id;
            verify[5] = backup;
            verify[6] = foxtra;
            verify[7] = romeon;
            option = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    entity = _closure2_slot2;
                    zuuluu = undefined;
                    entity = entity.bind(zuuluu)(tangon);
                    if(entity) { _fun00008_ip = 24; continue _fun00007 }
 20:
                    entity = false;
                    return entity;
 24:
                    golfie = _closure1_slot7;
                    report = golfie.getChannel;
                    michal = _closure2_slot0;
                    michal = michal.channel_id;
                    report = report.bind(golfie)(michal);
                    option = null;
                    michal = option != report;
                    if(!michal) { _fun00008_ip = 73; continue _fun00007 }
 59:
                    golfie = _closure2_slot1;
                    golfie = golfie.customId;
                    michal = option != golfie;
 73:
                    if(!michal) { _fun00008_ip = 201; continue _fun00007 }
 79:
                    michal = _closure1_slot0;
                    golfie = _closure1_slot2;
                    entity = 17;
                    entity = golfie[entity];
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = zuuluu.executeMessageComponentInteraction;
                    entity = {};
                    golfie = _closure2_slot1;
                    option = golfie.type;
                    entity['componentType'] = option;
                    option = _closure2_slot0;
                    verify = option.id;
                    entity['messageId'] = verify;
                    option = option.flags;
                    entity['messageFlags'] = option;
                    option = golfie.customId;
                    entity['customId'] = option;
                    golfie = golfie.id;
                    entity['componentId'] = golfie;
                    oscard = _closure2_slot3;
                    entity['applicationId'] = oscard;
                    oscard = report.id;
                    entity['channelId'] = oscard;
                    report = report.guild_id;
                    entity['guildId'] = report;
                    entity['localState'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 201:
                    entity = true;
                    return entity;
                }
            };
            option = offset.bind(yankee)(option, verify);
            entity['executeStateUpdate'] = option;
            option = tangon;
            if(!option) { _fun00006_ip = 302; continue _fun00005 }
 293:
            verify = _closure1_slot13;
            option = verify.bind(oscard)(golfie);
 302:
            entity['isDisabled'] = option;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.bind(oscard)(report, golfie, tangon);
            entity['visualState'] = zuuluu;
            entity['error'] = michal;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: useComponentStateForModal
        verify = argFoo;
        romeon = argBar;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = romeon;
        michal = argBaz;
        var _closure2_slot2 = michal;
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        michal = 13;
        michal = oscard[michal];
        tangon = undefined;
        offset = report.bind(tangon)(michal);
        golfie = offset.useStateFromStores;
        michal = _closure1_slot11;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            tangon = _closure1_slot11;
            zuuluu = tangon.getInteractionComponentState;
            michal = _closure2_slot0;
            michal = michal.customId;
            entity = _closure2_slot1;
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        golfie = golfie.bind(offset)(zuuluu, michal);
        michal = _closure1_slot17;
        zuuluu = michal.bind(tangon)(romeon, golfie);
        michal = zuuluu.error;
        zuuluu = zuuluu.validate;
        var _closure2_slot3 = zuuluu;
        yankee = _closure1_slot4;
        offset = yankee.useCallback;
        foxtra = verify.customId;
        verify = new Array(3);
        verify[0] = foxtra;
        romeon = romeon.id;
        verify[1] = romeon;
        verify[2] = zuuluu;
        zuuluu = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                entity = null;
                entity = entity == tangon;
                if(entity) { _fun00010_ip = 110; continue _fun00009 }
 12:
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 18;
                michal = zuuluu[michal];
                zuuluu = undefined;
                golfie = report.bind(zuuluu)(michal);
                oscard = golfie.dispatch;
                report = {};
                michal = 'SET_INTERACTION_COMPONENT_STATE';
                report['type'] = michal;
                option = _closure2_slot0;
                option = option.customId;
                report['rootContainerId'] = option;
                option = _closure2_slot1;
                option = option.id;
                report['componentId'] = option;
                report['state'] = tangon;
                report = oscard.bind(golfie)(report);
                michal = _closure2_slot3;
                michal = michal.bind(zuuluu)(tangon);
                michal = !michal;
                entity = !michal;
 110:
                return entity;
            }
        };
        zuuluu = offset.bind(yankee)(zuuluu, verify);
        var _closure2_slot4 = zuuluu;
        verify = _closure1_slot1;
        option = 19;
        option = oscard[option];
        option = verify.bind(tangon)(option);
        entity = function() {
            zuuluu = _closure2_slot4;
            michal = _closure2_slot2;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = option.bind(tangon)(entity);
        entity = {};
        entity['state'] = golfie;
        entity['executeStateUpdate'] = zuuluu;
        zuuluu = false;
        entity['isDisabled'] = zuuluu;
        zuuluu = 11;
        zuuluu = oscard[zuuluu];
        zuuluu = report.bind(tangon)(zuuluu);
        zuuluu = zuuluu.ActionComponentState;
        zuuluu = zuuluu.NORMAL;
        entity['visualState'] = zuuluu;
        entity['error'] = michal;
        return entity;
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    oscard = option[tangon];
    tangon = argCor;
    offset = tangon.bind(entity)(oscard);
    var _closure1_slot4 = offset;
    tangon = 2;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot12 = tangon;
    tangon = function(argFoo) { // Original name: isInteractionComponent
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            oscard = michal.type;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = 10;
            zuuluu = zuuluu[report];
            tangon = undefined;
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.BUTTON;
            if(!(zuuluu !== oscard)) { _fun00012_ip = 296; continue _fun00011 }
 52:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.STRING_SELECT;
            if(!(zuuluu !== oscard)) { _fun00012_ip = 292; continue _fun00011 }
 88:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.USER_SELECT;
            if(!(zuuluu !== oscard)) { _fun00012_ip = 292; continue _fun00011 }
 124:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.ROLE_SELECT;
            if(!(zuuluu !== oscard)) { _fun00012_ip = 292; continue _fun00011 }
 160:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.MENTIONABLE_SELECT;
            if(!(zuuluu !== oscard)) { _fun00012_ip = 292; continue _fun00011 }
 193:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.CHANNEL_SELECT;
            if(!(zuuluu !== oscard)) { _fun00012_ip = 292; continue _fun00011 }
 226:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.ACTION_ROW;
            if(!(zuuluu !== oscard)) { _fun00012_ip = 288; continue _fun00011 }
 259:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ComponentType;
            zuuluu = zuuluu.TEXT_INPUT;
 288:
            zuuluu = false;
            return zuuluu;
 292:
            zuuluu = true;
            return zuuluu;
 296:
            michal = michal.style;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[report];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.ButtonStyle;
            entity = entity.LINK;
            entity = michal !== entity;
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    report = function(argFoo, argBar) { // Original name: getActionComponentState
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            option = argFoo;
            golfie = argBar;
            zuuluu = arguments[2];
            tangon = undefined;
            if(!(zuuluu === tangon)) { _fun00014_ip = 17; continue _fun00013 }
 15:
            zuuluu = false;
 17:
            oscard = _closure1_slot0;
            entity = _closure1_slot2;
            report = 11;
            entity = entity[report];
            entity = oscard.bind(tangon)(entity);
            entity = entity.ActionComponentState;
            oscard = entity.NORMAL;
            entity = null;
            verify = entity != option;
            if(!verify) { _fun00014_ip = 102; continue _fun00013 }
 61:
            offset = option.state;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 12;
            entity = romeon[entity];
            entity = yankee.bind(tangon)(entity);
            entity = entity.InteractionState;
            entity = entity.FAILED;
            verify = offset !== entity;
 102:
            entity = oscard;
            if(!verify) { _fun00014_ip = 253; continue _fun00013 }
 111:
            verify = option.data;
            offset = verify.interactionType;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 10;
            verify = romeon[verify];
            verify = yankee.bind(tangon)(verify);
            verify = verify.InteractionTypes;
            verify = verify.MESSAGE_COMPONENT;
            if(!(offset === verify)) { _fun00014_ip = 178; continue _fun00013 }
 158:
            option = option.data;
            verify = option.componentId;
            option = golfie.id;
            if(!(verify !== option)) { _fun00014_ip = 221; continue _fun00013 }
 178:
            option = _closure1_slot13;
            option = option.bind(tangon)(golfie);
            if(!option) { _fun00014_ip = 219; continue _fun00013 }
 190:
            verify = _closure1_slot0;
            option = _closure1_slot2;
            option = option[report];
            option = verify.bind(tangon)(option);
            option = option.ActionComponentState;
            oscard = option.DISABLED;
 219:
            _fun00014_ip = 250; continue _fun00013;
 221:
            verify = _closure1_slot0;
            option = _closure1_slot2;
            option = option[report];
            option = verify.bind(tangon)(option);
            option = option.ActionComponentState;
            oscard = option.LOADING;
 250:
            entity = oscard;
 253:
            if(!zuuluu) { _fun00014_ip = 265; continue _fun00013 }
 256:
            oscard = _closure1_slot13;
            zuuluu = oscard.bind(tangon)(golfie);
 265:
            if(!zuuluu) { _fun00014_ip = 297; continue _fun00013 }
 268:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[report];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ActionComponentState;
            entity = michal.DISABLED;
 297:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    tangon = function(argFoo) { // Original name: useShouldDisableInteractiveComponents
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = _closure1_slot7;
            zuuluu = report.getChannel;
            entity = argFoo;
            oscard = zuuluu.bind(report)(entity);
            var _closure2_slot0 = oscard;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            report = 13;
            entity = option[report];
            verify = undefined;
            romeon = zuuluu.bind(verify)(entity);
            yankee = romeon.useStateFromStores;
            entity = _closure1_slot9;
            offset = new Array(1);
            offset[0] = entity;
            golfie = new Array(1);
            golfie[0] = oscard;
            entity = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = null;
                    tangon = zuuluu == entity;
                    entity = undefined;
                    if(tangon) { _fun00018_ip = 27; continue _fun00017 }
 18:
                    tangon = _closure2_slot0;
                    entity = tangon.guild_id;
 27:
                    entity = zuuluu == entity;
                    if(entity) { _fun00018_ip = 61; continue _fun00017 }
 34:
                    tangon = _closure1_slot9;
                    zuuluu = tangon.canChatInGuild;
                    michal = _closure2_slot0;
                    michal = michal.guild_id;
                    entity = zuuluu.bind(tangon)(michal);
 61:
                    return entity;
                }
            };
            entity = yankee.bind(romeon)(offset, entity, golfie);
            golfie = option[report];
            foxtra = zuuluu.bind(verify)(golfie);
            romeon = foxtra.useStateFromStores;
            golfie = _closure1_slot6;
            yankee = new Array(1);
            yankee[0] = golfie;
            offset = new Array(1);
            offset[0] = oscard;
            golfie = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = _closure2_slot0;
                    zuuluu = null;
                    tangon = zuuluu == entity;
                    entity = undefined;
                    if(tangon) { _fun00020_ip = 27; continue _fun00019 }
 18:
                    tangon = _closure2_slot0;
                    entity = tangon.guild_id;
 27:
                    entity = zuuluu != entity;
                    if(!entity) { _fun00020_ip = 61; continue _fun00019 }
 34:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.isLurking;
                    michal = _closure2_slot0;
                    michal = michal.guild_id;
                    entity = zuuluu.bind(tangon)(michal);
 61:
                    return entity;
                }
            };
            golfie = romeon.bind(foxtra)(yankee, golfie, offset);
            report = option[report];
            yankee = zuuluu.bind(verify)(report);
            offset = yankee.useStateFromStores;
            romeon = _closure1_slot8;
            report = new Array(2);
            report[0] = romeon;
            romeon = _closure1_slot10;
            report[1] = romeon;
            michal = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    michal = _closure1_slot10;
                    entity = michal.getCurrentUser;
                    tangon = entity.bind(michal)();
                    michal = _closure2_slot0;
                    entity = null;
                    oscard = entity == michal;
                    michal = undefined;
                    if(oscard) { _fun00022_ip = 43; continue _fun00021 }
 34:
                    oscard = _closure2_slot0;
                    michal = oscard.guild_id;
 43:
                    oscard = entity != michal;
                    michal = null;
                    if(!oscard) { _fun00022_ip = 122; continue _fun00021 }
 52:
                    oscard = entity != tangon;
                    michal = null;
                    if(!oscard) { _fun00022_ip = 122; continue _fun00021 }
 61:
                    golfie = _closure1_slot8;
                    oscard = golfie.getMember;
                    report = _closure2_slot0;
                    verify = entity == report;
                    report = undefined;
                    if(verify) { _fun00022_ip = 93; continue _fun00021 }
 84:
                    option = _closure2_slot0;
                    report = option.guild_id;
 93:
                    tangon = tangon.id;
                    tangon = oscard.bind(golfie)(report, tangon);
                    report = entity == tangon;
                    zuuluu = undefined;
                    if(report) { _fun00022_ip = 119; continue _fun00021 }
 113:
                    zuuluu = tangon.isPending;
 119:
                    michal = zuuluu;
 122:
                    entity = entity != michal;
                    if(!entity) { _fun00022_ip = 132; continue _fun00021 }
 129:
                    entity = michal;
 132:
                    return entity;
                }
            };
            report = offset.bind(yankee)(report, michal);
            michal = 14;
            michal = option[michal];
            offset = zuuluu.bind(verify)(michal);
            option = offset.useCurrentUserCommunicationDisabled;
            zuuluu = null;
            yankee = zuuluu == oscard;
            michal = undefined;
            if(yankee) { _fun00016_ip = 210; continue _fun00015 }
 205:
            michal = oscard.guild_id;
 210:
            offset = option.bind(offset)(michal);
            option = _closure1_slot3;
            michal = 2;
            option = option.bind(verify)(offset, michal);
            michal = 1;
            michal = option[michal];
            option = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 15;
            tangon = offset[tangon];
            option = option.bind(verify)(tangon);
            tangon = option.useCanUnarchiveThread;
            tangon = tangon.bind(option)(oscard);
            entity = !entity;
            if(entity) { _fun00016_ip = 275; continue _fun00015 }
 272:
            entity = golfie;
 275:
            if(entity) { _fun00016_ip = 281; continue _fun00015 }
 278:
            entity = report;
 281:
            if(entity) { _fun00016_ip = 304; continue _fun00015 }
 284:
            report = zuuluu != oscard;
            if(!report) { _fun00016_ip = 301; continue _fun00015 }
 291:
            golfie = oscard.isLockedThread;
            report = golfie.bind(oscard)();
 301:
            entity = report;
 304:
            if(entity) { _fun00016_ip = 333; continue _fun00015 }
 307:
            zuuluu = zuuluu != oscard;
            if(!zuuluu) { _fun00016_ip = 324; continue _fun00015 }
 314:
            report = oscard.isArchivedThread;
            zuuluu = report.bind(oscard)();
 324:
            if(!zuuluu) { _fun00016_ip = 330; continue _fun00015 }
 327:
            zuuluu = !tangon;
 330:
            entity = zuuluu;
 333:
            if(entity) { _fun00016_ip = 339; continue _fun00015 }
 336:
            entity = michal;
 339:
            entity = !entity;
            entity = !entity;
            return entity;
        }
    };
    var _closure1_slot15 = tangon;
    verify = offset.createContext;
    oscard = null;
    oscard = verify.bind(offset)(oscard);
    var _closure1_slot16 = oscard;
    oscard = 21;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/interaction_components/ComponentStateContext.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['getActionComponentState'] = report;
    zuuluu['useShouldDisableInteractiveComponents'] = tangon;
    tangon = function(argFoo) { // Original name: ComponentStateContextProvider
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            report = entity.children;
            yankee = entity.message;
            var _closure2_slot0 = yankee;
            offset = entity.modal;
            var _closure2_slot1 = offset;
            verify = entity.validators;
            var _closure2_slot2 = verify;
            option = entity.shouldDisableInteractiveComponents;
            tangon = undefined;
            if(!(option === tangon)) { _fun00024_ip = 53; continue _fun00023 }
 51:
            option = false;
 53:
            var _closure2_slot3 = option;
            golfie = _closure1_slot4;
            oscard = golfie.useMemo;
            zuuluu = new Array(4);
            zuuluu[0] = yankee;
            zuuluu[1] = offset;
            zuuluu[2] = verify;
            zuuluu[3] = option;
            michal = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot0;
                    option = null;
                    if(!(option == entity)) { _fun00026_ip = 105; continue _fun00025 }
 13:
                    michal = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 20;
                    entity = report[entity];
                    golfie = undefined;
                    oscard = michal.bind(golfie)(entity);
                    michal = _closure2_slot1;
                    report = option != michal;
                    entity = 'modal is present if message is not';
                    entity = oscard.bind(golfie)(report, entity);
                    entity = {};
                    report = _closure1_slot19;
                    tangon = report.bind;
                    tangon = tangon.bind(report)(option, michal);
                    entity['useComponentState'] = tangon;
                    tangon = michal.channelId;
                    entity['channelId'] = tangon;
                    entity['modal'] = michal;
                    michal = _closure2_slot2;
                    entity['validators'] = michal;
                    _fun00026_ip = 164; continue _fun00025;
 105:
                    michal = {};
                    golfie = _closure1_slot18;
                    oscard = golfie.bind;
                    tangon = _closure2_slot0;
                    report = _closure2_slot3;
                    report = oscard.bind(golfie)(option, tangon, report);
                    michal['useComponentState'] = report;
                    report = tangon.channel_id;
                    michal['channelId'] = report;
                    michal['message'] = tangon;
                    zuuluu = _closure2_slot2;
                    michal['validators'] = zuuluu;
                    entity = michal;
 164:
                    return entity;
                }
            };
            oscard = oscard.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot12;
            entity = _closure1_slot16;
            michal = entity.Provider;
            entity = {};
            entity['value'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ComponentStateContextProvider'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useComponentState
        zuuluu = _closure1_slot4;
        michal = zuuluu.useContext;
        entity = _closure1_slot16;
        tangon = michal.bind(zuuluu)(entity);
        zuuluu = tangon.useComponentState;
        michal = argFoo;
        entity = argBar;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useComponentState'] = tangon;
    michal = function() { // Original name: useComponentStateContext
        zuuluu = _closure1_slot4;
        michal = zuuluu.useContext;
        entity = _closure1_slot16;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useComponentStateContext'] = michal;
    return entity;
})();