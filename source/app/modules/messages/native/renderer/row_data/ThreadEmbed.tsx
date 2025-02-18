// app/modules/messages/native/renderer/row_data/ThreadEmbed.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ThreadEmbedWithMessage
        michal = argFoo;
        option = michal.title;
        golfie = michal.messageCountLabel;
        report = michal.message;
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = {'rowType': null, 'message': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'changeType': null, 'roleStyle': 'hidden'};
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.MESSAGE;
            entity['rowType'] = zuuluu;
            zuuluu = _closure2_slot0;
            entity['message'] = zuuluu;
            michal = _closure1_slot6;
            michal = michal.NOOP;
            entity['changeType'] = michal;
            return entity;
        };
        backup = zuuluu.bind(tangon)(entity, michal);
        tangon = _closure1_slot9;
        sizing = _closure1_slot0;
        kiloes = _closure1_slot2;
        report = 5;
        entity = kiloes[report];
        zuuluu = undefined;
        entity = sizing.bind(zuuluu)(entity);
        michal = entity.DataWithChildren;
        entity = {};
        oscard = 'threadEmbed';
        entity['keyPath'] = oscard;
        oscard = {};
        oscard['title'] = option;
        oscard['messageCountLabel'] = golfie;
        entity['rowProps'] = oscard;
        golfie = _closure1_slot9;
        report = kiloes[report];
        report = sizing.bind(zuuluu)(report);
        oscard = report.DataWithChildren;
        report = {};
        option = 'referencedMessage';
        report['keyPath'] = option;
        option = {};
        verify = _closure1_slot7;
        verify = verify.LOADED;
        option['state'] = verify;
        report['rowProps'] = option;
        offset = _closure1_slot9;
        romeon = _closure1_slot1;
        foxtra = 6;
        option = kiloes[foxtra];
        option = romeon.bind(zuuluu)(option);
        verify = option.Provider;
        option = {};
        foxtra = kiloes[foxtra];
        foxtra = sizing.bind(zuuluu)(foxtra);
        foxtra = foxtra.NestedMessageType;
        foxtra = foxtra.THREAD_EMBED;
        option['value'] = foxtra;
        foxtra = _closure1_slot9;
        yankee = 7;
        yankee = kiloes[yankee];
        romeon = romeon.bind(zuuluu)(yankee);
        yankee = {};
        yankee['row'] = backup;
        yankee = foxtra.bind(zuuluu)(romeon, yankee);
        option['children'] = yankee;
        option = offset.bind(zuuluu)(verify, option);
        report['children'] = option;
        report = golfie.bind(zuuluu)(oscard, report);
        entity['children'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: ThreadEmbedMissingMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            option = michal.title;
            report = michal.messageCountLabel;
            entity = michal.messagePreviewString;
            golfie = michal.archived;
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot10;
            michal = {};
            michal['title'] = option;
            michal['messageCountLabel'] = report;
            michal['messagePreviewString'] = entity;
            michal['archived'] = golfie;
            entity = undefined;
            report = undefined;
            if(!golfie) { _fun00002_ip = 112; continue _fun00001 }
 65:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            option = option.bind(entity)(golfie);
            golfie = option.getAssetUriForEmbed;
            verify = _closure1_slot1;
            oscard = 9;
            oscard = offset[oscard];
            oscard = verify.bind(entity)(oscard);
            report = golfie.bind(option)(oscard);
 112:
            michal['archivedIconUrl'] = report;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: ThreadEmbedBuilder
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            yankee = michal.messageId;
            var _closure2_slot0 = yankee;
            zuuluu = michal.channel;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            michal = 10;
            michal = option[michal];
            tangon = undefined;
            offset = oscard.bind(tangon)(michal);
            verify = offset.useStateFromStoresObject;
            michal = _closure1_slot4;
            golfie = new Array(1);
            golfie[0] = michal;
            michal = new Array(1);
            michal[0] = yankee;
            entity = function() {
                entity = {};
                offset = _closure1_slot4;
                verify = offset.getMostRecentMessage;
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                michal = 11;
                tangon = option[michal];
                report = undefined;
                yankee = golfie.bind(report)(tangon);
                tangon = yankee.castMessageIdAsChannelId;
                oscard = _closure2_slot0;
                tangon = tangon.bind(yankee)(oscard);
                tangon = verify.bind(offset)(tangon);
                entity['mostRecentMessage'] = tangon;
                tangon = _closure1_slot4;
                zuuluu = tangon.getCount;
                michal = option[michal];
                report = golfie.bind(report)(michal);
                michal = report.castMessageIdAsChannelId;
                michal = michal.bind(report)(oscard);
                michal = zuuluu.bind(tangon)(michal);
                entity['messageCount'] = michal;
                return entity;
            };
            michal = verify.bind(offset)(golfie, entity, michal);
            entity = michal.mostRecentMessage;
            verify = michal.messageCount;
            golfie = zuuluu.name;
            michal = 12;
            michal = option[michal];
            option = oscard.bind(tangon)(michal);
            oscard = option.formatMobileMessageCountLabel;
            michal = zuuluu.id;
            oscard = oscard.bind(option)(verify, michal);
            michal = null;
            if(!(michal != verify)) { _fun00004_ip = 140; continue _fun00003 }
 134:
            option = 0;
            if(!(!(verify > option))) { _fun00004_ip = 234; continue _fun00003 }
 140:
            offset = _closure1_slot9;
            verify = _closure1_slot12;
            option = {};
            option['title'] = golfie;
            option['messageCountLabel'] = oscard;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            yankee = 13;
            romeon = kiloes[yankee];
            romeon = backup.bind(tangon)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = kiloes[yankee];
            yankee = backup.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.HYtNyM;
            yankee = romeon.bind(foxtra)(yankee);
            option['messagePreviewString'] = yankee;
            yankee = false;
            option['archived'] = yankee;
            option = offset.bind(tangon)(verify, option);
            return option;
 234:
            zuuluu = zuuluu.threadMetadata;
            if(!(michal != zuuluu)) { _fun00004_ip = 256; continue _fun00003 }
 244:
            zuuluu = zuuluu.archived;
            if(zuuluu) { _fun00004_ip = 607; continue _fun00003 }
 256:
            if(!(michal != entity)) { _fun00004_ip = 513; continue _fun00003 }
 263:
            zuuluu = entity.type;
            option = _closure1_slot0;
            michal = _closure1_slot2;
            verify = 14;
            michal = michal[verify];
            michal = option.bind(tangon)(michal);
            michal = michal.MessageTypes;
            michal = michal.CHANNEL_NAME_CHANGE;
            if(!(zuuluu !== michal)) { _fun00004_ip = 513; continue _fun00003 }
 307:
            zuuluu = entity.type;
            option = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[verify];
            michal = option.bind(tangon)(michal);
            michal = michal.MessageTypes;
            michal = michal.THREAD_STARTER_MESSAGE;
            if(!(zuuluu !== michal)) { _fun00004_ip = 513; continue _fun00003 }
 348:
            michal = entity.blocked;
            if(michal) { _fun00004_ip = 397; continue _fun00003 }
 357:
            michal = entity.ignored;
            if(michal) { _fun00004_ip = 397; continue _fun00003 }
 366:
            option = _closure1_slot9;
            zuuluu = _closure1_slot11;
            michal = {};
            michal['title'] = golfie;
            michal['messageCountLabel'] = oscard;
            michal['message'] = entity;
            michal = option.bind(tangon)(zuuluu, michal);
            return michal;
 397:
            option = entity.blocked;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 13;
            michal = offset[entity];
            michal = verify.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = offset[entity];
            entity = verify.bind(tangon)(entity);
            entity = entity.t;
            if(option) { _fun00004_ip = 463; continue _fun00003 }
 450:
            option = entity.G7p6v7;
            option = michal.bind(zuuluu)(option);
            _fun00004_ip = 474; continue _fun00003;
 463:
            entity = entity.XAkOo6;
            option = michal.bind(zuuluu)(entity);
 474:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot12;
            entity = {};
            entity['title'] = golfie;
            entity['messageCountLabel'] = oscard;
            entity['messagePreviewString'] = option;
            option = false;
            entity['archived'] = option;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 513:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot12;
            entity = {};
            entity['title'] = golfie;
            entity['messageCountLabel'] = oscard;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 13;
            verify = romeon[option];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(tangon)(option);
            option = option.t;
            option = option.ZTo4HR;
            option = verify.bind(offset)(option);
            entity['messagePreviewString'] = option;
            option = false;
            entity['archived'] = option;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 607:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot12;
            entity = {};
            entity['title'] = golfie;
            entity['messageCountLabel'] = oscard;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 13;
            oscard = verify[report];
            oscard = option.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = verify[report];
            report = option.bind(tangon)(report);
            report = report.t;
            report = report.ZTo4HR;
            report = oscard.bind(golfie)(report);
            entity['messagePreviewString'] = report;
            report = true;
            entity['archived'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    golfie = tangon.Changeset;
    var _closure1_slot6 = golfie;
    golfie = tangon.ReferencedMessageRowState;
    var _closure1_slot7 = golfie;
    tangon = tangon.RowType;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.makeKeyedDataComponent;
    tangon = 'threadEmbed';
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/row_data/ThreadEmbed.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ThreadEmbed
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            golfie = michal.message;
            var _closure2_slot0 = golfie;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            report = undefined;
            option = tangon.bind(report)(zuuluu);
            oscard = option.useStateFromStores;
            zuuluu = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            verify = golfie.id;
            zuuluu = new Array(1);
            zuuluu[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getChannel;
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 11;
                tangon = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(tangon);
                tangon = report.castMessageIdAsChannelId;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = tangon.bind(report)(entity);
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = oscard.bind(option)(tangon, entity, zuuluu);
            entity = null;
            zuuluu = entity == oscard;
            if(zuuluu) { _fun00006_ip = 119; continue _fun00005 }
 90:
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot13;
            michal = {};
            golfie = golfie.id;
            michal['messageId'] = golfie;
            michal['channel'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 119:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();