// app/modules/interaction_components/InteractionModalUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: useApplicationInfo
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        oscard = report.id;
        michal = new Array(4);
        michal[0] = oscard;
        oscard = report.icon;
        michal[1] = oscard;
        oscard = report.name;
        michal[2] = oscard;
        report = report.bot;
        michal[3] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure1_slot8;
                entity = michal.getGuildId;
                option = entity.bind(michal)();
                oscard = null;
                entity = oscard != option;
                tangon = undefined;
                report = undefined;
                if(!entity) { _fun00002_ip = 83; continue _fun00001 }
 30:
                michal = _closure2_slot0;
                michal = michal.bot;
                michal = oscard != michal;
                report = undefined;
                if(!michal) { _fun00002_ip = 83; continue _fun00001 }
 52:
                golfie = _closure1_slot7;
                michal = golfie.getMember;
                entity = _closure2_slot0;
                entity = entity.bot;
                entity = entity.id;
                report = michal.bind(golfie)(option, entity);
 83:
                entity = {};
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                michal = 11;
                michal = option[michal];
                verify = golfie.bind(tangon)(michal);
                option = verify.getApplicationIconURL;
                golfie = {};
                offset = _closure2_slot0;
                yankee = offset.id;
                golfie['id'] = yankee;
                offset = offset.icon;
                golfie['icon'] = offset;
                offset = true;
                golfie['botIconFirst'] = offset;
                yankee = oscard != report;
                offset = undefined;
                if(!yankee) { _fun00002_ip = 164; continue _fun00001 }
 154:
                yankee = _closure2_slot0;
                offset = yankee.bot;
 164:
                golfie['bot'] = offset;
                golfie = option.bind(verify)(golfie);
                entity['applicationIconURL'] = golfie;
                if(!(oscard != report)) { _fun00002_ip = 197; continue _fun00001 }
 183:
                report = _closure2_slot0;
                report = report.bot;
                if(!(oscard == report)) { _fun00002_ip = 208; continue _fun00001 }
 197:
                report = _closure2_slot0;
                report = report.name;
                _fun00002_ip = 223; continue _fun00001;
 208:
                oscard = _closure2_slot0;
                oscard = oscard.bot;
                report = oscard.username;
 223:
                entity['applicationName'] = report;
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 12;
                zuuluu = oscard[zuuluu];
                zuuluu = report.bind(tangon)(zuuluu);
                michal = _closure2_slot0;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['applicationBaseUrl'] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    michal = function(argFoo, argBar) { // Original name: submitModal
        option = argFoo;
        var _closure2_slot0 = option;
        entity = argBar;
        var _closure2_slot1 = entity;
        golfie = _closure1_slot1;
        yankee = _closure1_slot2;
        entity = 19;
        entity = yankee[entity];
        zuuluu = undefined;
        oscard = golfie.bind(zuuluu)(entity);
        report = oscard.fromTimestamp;
        entity = global;
        verify = entity.Date;
        entity = verify.now;
        entity = entity.bind(verify)();
        entity = report.bind(oscard)(entity);
        var _closure2_slot2 = entity;
        verify = option.channelId;
        oscard = _closure1_slot6;
        report = oscard.getChannel;
        oscard = report.bind(oscard)(verify);
        var _closure2_slot3 = oscard;
        report = 18;
        report = yankee[report];
        golfie = golfie.bind(zuuluu)(report);
        report = null;
        oscard = report != oscard;
        report = 'expected channel';
        report = golfie.bind(zuuluu)(oscard, report);
        golfie = _closure1_slot13;
        oscard = option.customId;
        report = option.components;
        report = golfie.bind(zuuluu)(oscard, report);
        var _closure2_slot4 = report;
        offset = _closure1_slot0;
        michal = 20;
        michal = yankee[michal];
        oscard = offset.bind(zuuluu)(michal);
        report = oscard.addQueued;
        michal = {};
        golfie = {};
        verify = 10;
        verify = yankee[verify];
        verify = offset.bind(zuuluu)(verify);
        verify = verify.InteractionTypes;
        verify = verify.MODAL_SUBMIT;
        golfie['interactionType'] = verify;
        option = option.application;
        option = option.id;
        golfie['applicationId'] = option;
        michal['data'] = golfie;
        michal = report.bind(oscard)(entity, michal);
        michal = function() { // Original name: send
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot1;
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00004_ip = 26; continue _fun00003 }
 16:
                michal = _closure2_slot1;
                entity = michal.aborted;
 26:
                if(entity) { _fun00004_ip = 262; continue _fun00003 }
 32:
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 21;
                entity = offset[entity];
                option = undefined;
                entity = verify.bind(option)(entity);
                zuuluu = entity.HTTP;
                michal = zuuluu.post;
                entity = {};
                report = _closure1_slot12;
                report = report.INTERACTIONS;
                entity['url'] = report;
                report = {};
                golfie = 10;
                golfie = offset[golfie];
                golfie = verify.bind(option)(golfie);
                golfie = golfie.InteractionTypes;
                golfie = golfie.MODAL_SUBMIT;
                report['type'] = golfie;
                option = _closure2_slot0;
                golfie = option.application;
                golfie = golfie.id;
                report['application_id'] = golfie;
                golfie = _closure2_slot3;
                verify = golfie.id;
                report['channel_id'] = verify;
                golfie = golfie.guild_id;
                report['guild_id'] = golfie;
                golfie = {};
                verify = option.id;
                golfie['id'] = verify;
                option = option.customId;
                golfie['custom_id'] = option;
                option = _closure2_slot4;
                golfie['components'] = option;
                report['data'] = golfie;
                golfie = _closure1_slot5;
                oscard = golfie.getSessionId;
                oscard = oscard.bind(golfie)();
                report['session_id'] = oscard;
                oscard = _closure2_slot2;
                report['nonce'] = oscard;
                entity['body'] = report;
                tangon = _closure2_slot1;
                entity['signal'] = tangon;
                tangon = false;
                entity['rejectWithError'] = tangon;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.catch;
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.status;
                        michal = 429;
                        if(!(michal !== zuuluu)) { _fun00006_ip = 63; continue _fun00005 }
 18:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        michal = 20;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.setFailed;
                        michal = _closure2_slot2;
                        michal = zuuluu.bind(tangon)(michal);
                        _fun00006_ip = 136; continue _fun00005;
 63:
                        michal = global;
                        tangon = michal.setTimeout;
                        zuuluu = _closure2_slot5;
                        entity = entity.body;
                        report = entity.retry_after;
                        oscard = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 22;
                        entity = michal[entity];
                        michal = undefined;
                        entity = oscard.bind(michal)(entity);
                        entity = entity.Millis;
                        entity = entity.SECOND;
                        entity = report * entity;
                        entity = tangon.bind(michal)(zuuluu, entity);
 136:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
 262:
                entity = undefined;
                return entity;
            }
        };
        var _closure2_slot5 = michal;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    var _closure1_slot15 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golfie[report];
    report = argCor;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    verify = golfie[report];
    verify = option.bind(entity)(verify);
    var _closure1_slot9 = verify;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.InteractionModalState;
    var _closure1_slot10 = report;
    report = 7;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot12 = report;
    report = function(argFoo, argBar) { // Original name: getData
        zuuluu = argBar;
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = zuuluu.map;
        entity = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = argFoo;
                tangon = michal.type;
                oscard = _closure1_slot0;
                entity = _closure1_slot2;
                golfie = 10;
                entity = entity[golfie];
                report = undefined;
                entity = oscard.bind(report)(entity);
                entity = entity.ComponentType;
                entity = entity.ACTION_ROW;
                if(!(entity !== tangon)) { _fun00008_ip = 333; continue _fun00007 }
 52:
                oscard = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golfie];
                entity = oscard.bind(report)(entity);
                entity = entity.ComponentType;
                entity = entity.TEXT_INPUT;
                if(!(entity !== tangon)) { _fun00008_ip = 245; continue _fun00007 }
 88:
                oscard = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golfie];
                entity = oscard.bind(report)(entity);
                entity = entity.ComponentType;
                entity = entity.STRING_SELECT;
                if(!(entity !== tangon)) { _fun00008_ip = 157; continue _fun00007 }
 121:
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 18;
                entity = oscard[entity];
                oscard = tangon.bind(report)(entity);
                tangon = false;
                entity = 'unreachable';
                entity = oscard.bind(report)(tangon, entity);
                return report;
 157:
                golfie = _closure1_slot11;
                oscard = golfie.getInteractionComponentState;
                tangon = _closure2_slot0;
                entity = michal.id;
                oscard = oscard.bind(golfie)(tangon, entity);
                entity = {};
                tangon = michal.type;
                entity['type'] = tangon;
                tangon = michal.customId;
                entity['custom_id'] = tangon;
                tangon = null;
                golfie = tangon == oscard;
                option = undefined;
                if(golfie) { _fun00008_ip = 223; continue _fun00007 }
 218:
                option = oscard.type;
 223:
                golfie = michal.type;
                tangon = null;
                if(!(option === golfie)) { _fun00008_ip = 239; continue _fun00007 }
 234:
                tangon = oscard.values;
 239:
                entity['values'] = tangon;
                return entity;
 245:
                golfie = _closure1_slot11;
                oscard = golfie.getInteractionComponentState;
                tangon = _closure2_slot0;
                entity = michal.id;
                oscard = oscard.bind(golfie)(tangon, entity);
                entity = {};
                tangon = michal.type;
                entity['type'] = tangon;
                tangon = michal.customId;
                entity['custom_id'] = tangon;
                tangon = null;
                golfie = tangon == oscard;
                option = undefined;
                if(golfie) { _fun00008_ip = 311; continue _fun00007 }
 306:
                option = oscard.type;
 311:
                golfie = michal.type;
                tangon = null;
                if(!(option === golfie)) { _fun00008_ip = 327; continue _fun00007 }
 322:
                tangon = oscard.value;
 327:
                entity['value'] = tangon;
                return entity;
 333:
                entity = {};
                tangon = michal.type;
                entity['type'] = tangon;
                tangon = _closure1_slot13;
                zuuluu = _closure2_slot0;
                michal = michal.components;
                michal = tangon.bind(report)(zuuluu, michal);
                entity['components'] = michal;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot13 = report;
    report = 23;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/interaction_components/InteractionModalUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: useIsFirstTextInputInModal
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 9;
            michal = tangon[michal];
            report = undefined;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.useComponentStateContext;
            tangon = michal.bind(zuuluu)();
            zuuluu = null;
            oscard = zuuluu == tangon;
            michal = undefined;
            if(oscard) { _fun00010_ip = 73; continue _fun00009 }
 46:
            tangon = tangon.modal;
            oscard = zuuluu == tangon;
            michal = undefined;
            if(oscard) { _fun00010_ip = 73; continue _fun00009 }
 61:
            oscard = tangon.components;
            tangon = 0;
            michal = oscard[tangon];
 73:
            tangon = zuuluu == michal;
            zuuluu = undefined;
            if(tangon) { _fun00010_ip = 87; continue _fun00009 }
 82:
            zuuluu = michal.type;
 87:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 10;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.ComponentType;
            entity = entity.ACTION_ROW;
            entity = zuuluu === entity;
            if(!entity) { _fun00010_ip = 150; continue _fun00009 }
 126:
            zuuluu = michal.components;
            michal = 0;
            michal = zuuluu[michal];
            zuuluu = michal.id;
            michal = argFoo;
            entity = zuuluu === michal;
 150:
            return entity;
        }
    };
    zuuluu['useIsFirstTextInputInModal'] = report;
    report = function(argFoo, argBar) { // Original name: useModalState
        michal = argFoo;
        backup = argBar;
        var _closure2_slot0 = michal;
        var _closure2_slot1 = backup;
        option = michal.application;
        foxtra = michal.customId;
        var _closure2_slot2 = foxtra;
        golfie = michal.components;
        offset = _closure1_slot1;
        yankee = _closure1_slot2;
        zuuluu = 13;
        zuuluu = yankee[zuuluu];
        oscard = undefined;
        zuuluu = offset.bind(oscard)(zuuluu);
        sizing = zuuluu.bind(oscard)();
        var _closure2_slot3 = sizing;
        tangon = _closure1_slot4;
        zuuluu = tangon.useState;
        echoed = null;
        zuuluu = zuuluu.bind(tangon)(echoed);
        output = _closure1_slot3;
        kiloes = 2;
        zuuluu = output.bind(oscard)(zuuluu, kiloes);
        romeon = 0;
        tangon = zuuluu[romeon];
        report = 1;
        zuuluu = zuuluu[report];
        var _closure2_slot4 = zuuluu;
        result = _closure1_slot4;
        zuuluu = result.useState;
        zuuluu = zuuluu.bind(result)(echoed);
        zuuluu = output.bind(oscard)(zuuluu, kiloes);
        kiloes = zuuluu[romeon];
        var _closure2_slot5 = kiloes;
        zuuluu = zuuluu[report];
        var _closure2_slot6 = zuuluu;
        report = _closure1_slot0;
        zuuluu = 14;
        zuuluu = yankee[zuuluu];
        result = report.bind(oscard)(zuuluu);
        output = result.useStateFromStores;
        zuuluu = _closure1_slot9;
        romeon = new Array(1);
        romeon[0] = zuuluu;
        report = new Array(1);
        report[0] = kiloes;
        zuuluu = function() {
            zuuluu = _closure1_slot9;
            michal = zuuluu.getModalState;
            entity = _closure2_slot5;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report = output.bind(result)(romeon, zuuluu, report);
        var _closure2_slot7 = report;
        zuuluu = 15;
        zuuluu = yankee[zuuluu];
        offset = offset.bind(oscard)(zuuluu);
        zuuluu = function() {
            entity = global;
            entity = entity.Set;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            zuuluu = michal;
            entity = new zuuluu[entity](michal);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        zuuluu = offset.bind(oscard)(zuuluu);
        var _closure2_slot8 = zuuluu;
        romeon = _closure1_slot4;
        yankee = romeon.useCallback;
        offset = new Array(3);
        offset[0] = sizing;
        offset[1] = michal;
        offset[2] = zuuluu;
        michal = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure2_slot4;
                entity = undefined;
                tangon = null;
                zuuluu = zuuluu.bind(entity)(tangon);
                zuuluu = _closure2_slot6;
                zuuluu = zuuluu.bind(entity)(tangon);
                tangon = _closure2_slot8;
                zuuluu = function(argFoo) {
                    tangon = argFoo;
                    michal = true;
                    var _closure4_slot0 = michal;
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            michal = argFoo;
                            entity = undefined;
                            michal = michal.bind(entity)();
                            if(michal) { _fun00014_ip = 21; continue _fun00013 }
 12:
                            michal = false;
                            _closure4_slot0 = michal;
 21:
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    entity = _closure4_slot0;
                    return entity;
                };
                zuuluu = zuuluu.bind(entity)(tangon);
                if(!zuuluu) { _fun00012_ip = 76; continue _fun00011 }
 46:
                zuuluu = _closure2_slot6;
                report = _closure1_slot15;
                tangon = _closure2_slot0;
                michal = _closure2_slot3;
                michal = report.bind(entity)(tangon, michal);
                michal = zuuluu.bind(entity)(michal);
 76:
                return entity;
            }
        };
        michal = yankee.bind(romeon)(michal, offset);
        romeon = _closure1_slot4;
        yankee = romeon.useEffect;
        offset = new Array(4);
        offset[0] = kiloes;
        offset[1] = report;
        offset[2] = backup;
        offset[3] = foxtra;
        verify = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = _closure2_slot7;
                zuuluu = _closure1_slot10;
                zuuluu = zuuluu.SUCCEEDED;
                if(!(tangon === zuuluu)) { _fun00016_ip = 85; continue _fun00015 }
 24:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 16;
                zuuluu = tangon[zuuluu];
                tangon = undefined;
                oscard = report.bind(tangon)(zuuluu);
                report = oscard.dispatch;
                zuuluu = {};
                golfie = 'CLEAR_INTERACTION_MODAL_STATE';
                zuuluu['type'] = golfie;
                golfie = _closure2_slot2;
                zuuluu['customId'] = golfie;
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = _closure2_slot1;
                zuuluu = zuuluu.bind(tangon)();
 85:
                tangon = _closure2_slot7;
                zuuluu = _closure1_slot10;
                zuuluu = zuuluu.ERRORED;
                if(!(tangon === zuuluu)) { _fun00016_ip = 171; continue _fun00015 }
 103:
                zuuluu = _closure2_slot4;
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 17;
                tangon = golfie[entity];
                michal = undefined;
                tangon = oscard.bind(michal)(tangon);
                report = tangon.intl;
                tangon = report.string;
                entity = golfie[entity];
                entity = oscard.bind(michal)(entity);
                entity = entity.t;
                entity = entity.uJgdEh;
                entity = tangon.bind(report)(entity);
                entity = zuuluu.bind(michal)(entity);
 171:
                entity = undefined;
                return entity;
            }
        };
        verify = yankee.bind(romeon)(verify, offset);
        entity = _closure1_slot14;
        oscard = entity.bind(oscard)(option);
        entity = {};
        entity['components'] = golfie;
        golfie = oscard.applicationIconURL;
        entity['applicationIconURL'] = golfie;
        oscard = oscard.applicationName;
        entity['applicationName'] = oscard;
        entity['submissionState'] = report;
        entity['error'] = tangon;
        entity['validators'] = zuuluu;
        entity['onSubmit'] = michal;
        return entity;
    };
    zuuluu['useModalState'] = report;
    tangon = function(argFoo) { // Original name: useIframeModalState
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.application;
            offset = entity.customId;
            tangon = _closure1_slot14;
            romeon = undefined;
            tangon = tangon.bind(romeon)(zuuluu);
            oscard = tangon.applicationIconURL;
            report = tangon.applicationName;
            tangon = tangon.applicationBaseUrl;
            verify = _closure1_slot6;
            option = verify.getChannel;
            golfie = entity.channelId;
            verify = option.bind(verify)(golfie);
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            michal = 18;
            michal = option[michal];
            yankee = golfie.bind(romeon)(michal);
            golfie = null;
            option = golfie != verify;
            michal = 'channel should not be null';
            michal = yankee.bind(romeon)(option, michal);
            michal = {};
            echoed = entity.channelId;
            output = zuuluu.id;
            option = global;
            zuuluu = option.HermesInternal;
            romeon = zuuluu.concat;
            zuuluu = '';
            yankee = ':';
            update = zuuluu;
            result = yankee;
            sizing = yankee;
            kiloes = offset;
            yankee = update[romeon](echoed, result, output, sizing, kiloes, backup);
            michal['instance_id'] = yankee;
            michal['custom_id'] = offset;
            offset = entity.channelId;
            michal['channel_id'] = offset;
            offset = verify.guild_id;
            offset = golfie != offset;
            if(!offset) { _fun00018_ip = 192; continue _fun00017 }
 183:
            yankee = verify.guild_id;
            offset = zuuluu !== yankee;
 192:
            if(!offset) { _fun00018_ip = 206; continue _fun00017 }
 195:
            verify = verify.guild_id;
            michal['guild_id'] = verify;
 206:
            option = option.URL;
            golfie = golfie != tangon;
            if(!golfie) { _fun00018_ip = 222; continue _fun00017 }
 219:
            zuuluu = tangon;
 222:
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            update = golfie;
            echoed = zuuluu;
            zuuluu = new update[option](echoed, result);
            zuuluu = zuuluu instanceof Object ? zuuluu : golfie;
            entity = entity.iframePath;
            zuuluu['pathname'] = entity;
            entity = {};
            entity['applicationIconURL'] = oscard;
            entity['applicationName'] = report;
            entity['applicationBaseUrl'] = tangon;
            entity['queryParams'] = michal;
            michal = zuuluu.toString;
            michal = michal.bind(zuuluu)();
            entity['iframeUrl'] = michal;
            return entity;
        }
    };
    zuuluu['useIframeModalState'] = tangon;
    zuuluu['submitModal'] = michal;
    return entity;
})();