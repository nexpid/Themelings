// app/modules/messages/native/renderer/row_data/ReferencedMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ReplyLoaded
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.repliedMessage;
            var _closure2_slot0 = zuuluu;
            backup = michal.isMentioningReply;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            golfie = _closure1_slot3;
            oscard = golfie.useMemo;
            report = new Array(1);
            report[0] = zuuluu;
            michal = function() {
                entity = {'rowType': null, 'message': null, 'isFirst': true, 'isEditing': false, 'canShowImages': true, 'changeType': null, 'roleStyle': 'hidden'};
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.MESSAGE;
                entity['rowType'] = zuuluu;
                zuuluu = _closure2_slot0;
                entity['message'] = zuuluu;
                michal = _closure1_slot7;
                michal = michal.NOOP;
                entity['changeType'] = michal;
                return entity;
            };
            kiloes = oscard.bind(golfie)(michal, report);
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            report = report.bind(tangon)(michal);
            michal = report.getMessageStickers;
            michal = michal.bind(report)(zuuluu);
            michal = michal.length;
            report = 0;
            if(!(!(michal > report))) { _fun00002_ip = 299; continue _fun00001 }
 103:
            oscard = zuuluu.hasFlag;
            michal = _closure1_slot10;
            michal = michal.IS_VOICE_MESSAGE;
            michal = oscard.bind(zuuluu)(michal);
            if(michal) { _fun00002_ip = 235; continue _fun00001 }
 127:
            michal = zuuluu.embeds;
            michal = michal.length;
            michal = michal > report;
            if(michal) { _fun00002_ip = 160; continue _fun00001 }
 145:
            zuuluu = zuuluu.attachments;
            zuuluu = zuuluu.length;
            michal = zuuluu > report;
 160:
            oscard = undefined;
            if(!michal) { _fun00002_ip = 361; continue _fun00001 }
 168:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 7;
            zuuluu = option[michal];
            zuuluu = golfie.bind(tangon)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.string;
            michal = option[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.JAKsMz;
            michal = zuuluu.bind(report)(michal);
            _closure2_slot1 = michal;
            oscard = michal;
            _fun00002_ip = 361; continue _fun00001;
 235:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 7;
            zuuluu = option[michal];
            zuuluu = golfie.bind(tangon)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.string;
            michal = option[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.6bhHra;
            michal = zuuluu.bind(report)(michal);
            _closure2_slot1 = michal;
            oscard = michal;
            _fun00002_ip = 361; continue _fun00001;
 299:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 7;
            zuuluu = option[michal];
            zuuluu = golfie.bind(tangon)(zuuluu);
            report = zuuluu.intl;
            zuuluu = report.string;
            michal = option[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.7K5LmZ;
            michal = zuuluu.bind(report)(michal);
            _closure2_slot1 = michal;
            oscard = michal;
 361:
            report = _closure1_slot3;
            zuuluu = report.useMemo;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function() {
                entity = {};
                michal = _closure1_slot8;
                michal = michal.LOADED;
                entity['state'] = michal;
                michal = _closure2_slot1;
                entity['systemContent'] = michal;
                return entity;
            };
            report = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot11;
            verify = _closure1_slot0;
            sizing = _closure1_slot2;
            entity = 8;
            entity = sizing[entity];
            entity = verify.bind(tangon)(entity);
            michal = entity.DataWithChildren;
            entity = {};
            oscard = 'referencedMessage';
            entity['keyPath'] = oscard;
            entity['rowProps'] = report;
            golfie = _closure1_slot11;
            romeon = _closure1_slot1;
            option = 9;
            report = sizing[option];
            report = romeon.bind(tangon)(report);
            oscard = report.Provider;
            report = {};
            option = sizing[option];
            option = verify.bind(tangon)(option);
            option = option.NestedMessageType;
            option = option.REPLIED_MESSAGE;
            report['value'] = option;
            offset = _closure1_slot11;
            option = 10;
            option = sizing[option];
            option = verify.bind(tangon)(option);
            verify = option.RenderMessageOptionsOverride;
            option = {};
            foxtra = false;
            option['renderReplies'] = foxtra;
            foxtra = _closure1_slot11;
            yankee = 11;
            yankee = sizing[yankee];
            romeon = romeon.bind(tangon)(yankee);
            yankee = {};
            yankee['row'] = kiloes;
            yankee['isMentioningReply'] = backup;
            yankee = foxtra.bind(tangon)(romeon, yankee);
            option['children'] = yankee;
            option = offset.bind(tangon)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: ReplyNotLoaded
        entity = argFoo;
        entity = entity.replyHint;
        tangon = _closure1_slot11;
        zuuluu = _closure1_slot12;
        michal = {};
        report = _closure1_slot8;
        report = report.SYSTEM;
        michal['state'] = report;
        michal['content'] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
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
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ReferencedMessageState;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Changeset;
    var _closure1_slot7 = golfie;
    golfie = tangon.ReferencedMessageRowState;
    var _closure1_slot8 = golfie;
    tangon = tangon.RowType;
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MessageFlags;
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.makeKeyedDataComponent;
    tangon = 'referencedMessage';
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/row_data/ReferencedMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ReferencedMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            option = entity.message;
            entity = option.messageReference;
            var _closure2_slot0 = entity;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 12;
            verify = golfie[zuuluu];
            tangon = undefined;
            romeon = oscard.bind(tangon)(verify);
            yankee = romeon.useStateFromStores;
            verify = _closure1_slot4;
            offset = new Array(1);
            offset[0] = verify;
            verify = new Array(1);
            verify[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getMessageByReference;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = yankee.bind(romeon)(offset, entity, verify);
            var _closure2_slot1 = entity;
            zuuluu = golfie[zuuluu];
            verify = oscard.bind(tangon)(zuuluu);
            golfie = verify.useStateFromStores;
            zuuluu = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            offset = entity.message;
            zuuluu = new Array(2);
            zuuluu[0] = offset;
            offset = entity.state;
            zuuluu[1] = offset;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot1;
                    tangon = entity.state;
                    entity = _closure1_slot5;
                    entity = entity.LOADED;
                    entity = tangon === entity;
                    if(!entity) { _fun00006_ip = 56; continue _fun00005 }
 32:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.isBlockedForMessage;
                    michal = _closure2_slot1;
                    michal = michal.message;
                    entity = zuuluu.bind(tangon)(michal);
 56:
                    return entity;
                }
            };
            michal = golfie.bind(verify)(oscard, michal, zuuluu);
            if(michal) { _fun00004_ip = 453; continue _fun00003 }
 152:
            zuuluu = entity.state;
            michal = _closure1_slot5;
            michal = michal.LOADED;
            if(!(michal !== zuuluu)) { _fun00004_ip = 394; continue _fun00003 }
 174:
            michal = _closure1_slot5;
            michal = michal.NOT_LOADED;
            if(!(michal !== zuuluu)) { _fun00004_ip = 316; continue _fun00003 }
 191:
            michal = _closure1_slot5;
            michal = michal.DELETED;
            if(!(michal !== zuuluu)) { _fun00004_ip = 238; continue _fun00003 }
 205:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 14;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.assertNever;
            michal = michal.bind(zuuluu)(entity);
            return tangon;
 238:
            oscard = _closure1_slot11;
            zuuluu = _closure1_slot14;
            michal = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 7;
            verify = romeon[golfie];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            golfie = romeon[golfie];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.mE3KJC;
            golfie = verify.bind(offset)(golfie);
            michal['replyHint'] = golfie;
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 316:
            oscard = _closure1_slot11;
            zuuluu = _closure1_slot14;
            michal = {};
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 7;
            verify = romeon[golfie];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            golfie = romeon[golfie];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.1i+hMj;
            golfie = verify.bind(offset)(golfie);
            michal['replyHint'] = golfie;
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 394:
            golfie = entity.message;
            zuuluu = _closure1_slot11;
            michal = _closure1_slot13;
            entity = {};
            entity['repliedMessage'] = golfie;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            oscard = 13;
            oscard = offset[oscard];
            oscard = verify.bind(tangon)(oscard);
            oscard = oscard.bind(tangon)(option, golfie);
            entity['isMentioningReply'] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 453:
            zuuluu = _closure1_slot11;
            michal = _closure1_slot14;
            entity = {};
            option = _closure1_slot0;
            verify = _closure1_slot2;
            report = 7;
            oscard = verify[report];
            oscard = option.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = verify[report];
            report = option.bind(tangon)(report);
            report = report.t;
            report = report.1i+hMj;
            report = oscard.bind(golfie)(report);
            entity['replyHint'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();