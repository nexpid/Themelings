// app/modules/chat_input/native/accessories/ChatInputSendButton.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: renderChatInputSendButton
        report = argFoo;
        tangon = _closure1_slot7;
        zuuluu = _closure1_slot10;
        michal = {};
        michal['type'] = report;
        entity = argBaz;
        michal['state'] = entity;
        entity = argCor;
        michal['cleanup'] = entity;
        golfie = argBar;
        option = michal;
        entity = copyDataProperties(option, golfie);
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal, report);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getChatInputSendButtonItemKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.isOnCooldown;
            tangon = entity.sendVoiceMessageEnabled;
            entity = entity.sendEnabled;
            zuuluu = _closure1_slot8;
            if(tangon) { _fun00002_ip = 50; continue _fun00001 }
 31:
            if(entity) { _fun00002_ip = 42; continue _fun00001 }
 34:
            entity = zuuluu.BUTTON_SEND_DISABLED;
            _fun00002_ip = 48; continue _fun00001;
 42:
            entity = zuuluu.BUTTON_SEND;
 48:
            _fun00002_ip = 70; continue _fun00001;
 50:
            if(michal) { _fun00002_ip = 61; continue _fun00001 }
 53:
            michal = zuuluu.BUTTON_SEND_VOICE_MESSAGE;
            _fun00002_ip = 67; continue _fun00001;
 61:
            michal = zuuluu.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
 67:
            entity = michal;
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    yankee = tangon.CHAT_INPUT_ACTION_BUTTON_SIZE;
    foxtra = tangon.CHAT_INPUT_ACTION_BUTTON_WIDTH;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = {};
    option = 'send-button';
    tangon['BUTTON_SEND'] = option;
    option = 'send-button-disabled';
    tangon['BUTTON_SEND_DISABLED'] = option;
    option = 'voice-message-button';
    tangon['BUTTON_SEND_VOICE_MESSAGE'] = option;
    option = 'voice-message-button-disabled';
    tangon['BUTTON_SEND_VOICE_MESSAGE_DISABLED'] = option;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    offset['width'] = foxtra;
    offset['height'] = yankee;
    tangon['container'] = offset;
    offset = {};
    yankee = 7;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_BRAND;
    offset['backgroundColor'] = foxtra;
    tangon['sendButtonActive'] = offset;
    offset = {};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.WHITE;
    offset['tintColor'] = yankee;
    tangon['sendButtonIconActive'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot9 = tangon;
    option = golfie.memo;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            romeon = entity.onSendMessage;
            yankee = entity.sendEnabled;
            offset = entity.isOnCooldown;
            verify = entity.channelId;
            report = entity.state;
            option = entity.cleanup;
            golfie = entity.type;
            entity = _closure1_slot9;
            tangon = undefined;
            foxtra = entity.bind(tangon)();
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 8;
            entity = backup[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['cleanup'] = option;
            entity['state'] = report;
            report = _closure1_slot8;
            report = report.BUTTON_SEND_VOICE_MESSAGE;
            if(!(golfie !== report)) { _fun00004_ip = 276; continue _fun00003 }
 107:
            report = _closure1_slot8;
            report = report.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
            if(!(golfie !== report)) { _fun00004_ip = 276; continue _fun00003 }
 124:
            option = _closure1_slot7;
            golfie = _closure1_slot1;
            output = _closure1_slot2;
            report = 10;
            report = output[report];
            golfie = golfie.bind(tangon)(report);
            report = {};
            backup = true;
            report['active'] = backup;
            backup = foxtra.sendButtonActive;
            report['activeStyle'] = backup;
            foxtra = foxtra.sendButtonIconActive;
            report['activeIconStyle'] = foxtra;
            sizing = _closure1_slot0;
            foxtra = 11;
            foxtra = output[foxtra];
            foxtra = sizing.bind(tangon)(foxtra);
            foxtra = foxtra.SendMessageIcon;
            report['IconComponent'] = foxtra;
            foxtra = 12;
            backup = output[foxtra];
            backup = sizing.bind(tangon)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            foxtra = output[foxtra];
            foxtra = sizing.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.TXNS7e;
            foxtra = backup.bind(kiloes)(foxtra);
            report['accessibilityLabel'] = foxtra;
            report['onPress'] = romeon;
            yankee = !yankee;
            report['disabled'] = yankee;
            report = option.bind(tangon)(golfie, report);
            _fun00004_ip = 316; continue _fun00003;
 276:
            option = _closure1_slot7;
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            oscard = 9;
            oscard = yankee[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard['disabled'] = offset;
            oscard['channelId'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 316:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = option.bind(golfie)(tangon);
    var _closure1_slot10 = tangon;
    tangon = golfie.forwardRef;
    michal = function(argFoo, argBar) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = tangon.channel;
            var _closure2_slot0 = zuuluu;
            oscard = tangon.defaultValue;
            michal = tangon.canSendVoiceMessage;
            romeon = tangon.hasPendingAttachments;
            foxtra = tangon.hasPendingEdit;
            offset = tangon.onSendMessage;
            var _closure2_slot1 = offset;
            golfie = tangon.requireTextContent;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00006_ip = 62; continue _fun00005 }
 60:
            golfie = false;
 62:
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            report = _closure1_slot9;
            report = report.bind(tangon)();
            backup = _closure1_slot4;
            yankee = backup.useState;
            verify = oscard.length;
            oscard = 0;
            verify = verify > oscard;
            backup = yankee.bind(backup)(verify);
            yankee = _closure1_slot3;
            verify = 2;
            yankee = yankee.bind(tangon)(backup, verify);
            oscard = yankee[oscard];
            verify = 1;
            verify = yankee[verify];
            _closure2_slot2 = verify;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 13;
            verify = backup[verify];
            sizing = yankee.bind(tangon)(verify);
            kiloes = sizing.useStateFromStores;
            verify = _closure1_slot6;
            backup = new Array(1);
            backup[0] = verify;
            yankee = new Array(1);
            yankee[0] = zuuluu;
            verify = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.isChannelOnCooldown;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            yankee = kiloes.bind(sizing)(backup, verify, yankee);
            _closure2_slot3 = yankee;
            verify = !yankee;
            if(verify) { _fun00006_ip = 214; continue _fun00005 }
 211:
            verify = foxtra;
 214:
            if(!verify) { _fun00006_ip = 232; continue _fun00005 }
 217:
            if(oscard) { _fun00006_ip = 223; continue _fun00005 }
 220:
            oscard = romeon;
 223:
            if(oscard) { _fun00006_ip = 229; continue _fun00005 }
 226:
            oscard = !golfie;
 229:
            verify = oscard;
 232:
            _closure2_slot4 = verify;
            if(!michal) { _fun00006_ip = 242; continue _fun00005 }
 239:
            michal = !verify;
 242:
            _closure2_slot5 = michal;
            oscard = _closure1_slot4;
            golfie = oscard.useMemo;
            romeon = zuuluu.id;
            zuuluu = new Array(5);
            zuuluu[0] = romeon;
            zuuluu[1] = yankee;
            zuuluu[2] = offset;
            zuuluu[3] = verify;
            zuuluu[4] = michal;
            michal = function() {
                michal = {};
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.id;
                michal['channelId'] = zuuluu;
                zuuluu = _closure2_slot3;
                michal['isOnCooldown'] = zuuluu;
                zuuluu = _closure2_slot1;
                michal['onSendMessage'] = zuuluu;
                zuuluu = _closure2_slot4;
                michal['sendEnabled'] = zuuluu;
                entity = _closure2_slot5;
                michal['sendVoiceMessageEnabled'] = entity;
                entity = new Array(1);
                entity[0] = michal;
                return entity;
            };
            verify = golfie.bind(oscard)(michal, zuuluu);
            zuuluu = oscard.useImperativeHandle;
            michal = argBar;
            entity = function() {
                entity = {};
                michal = _closure2_slot2;
                entity['setHasText'] = michal;
                return entity;
            };
            entity = zuuluu.bind(oscard)(michal, entity);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot5;
            entity = {};
            report = report.container;
            entity['style'] = report;
            golfie = _closure1_slot7;
            oscard = _closure1_slot0;
            offset = _closure1_slot2;
            report = 14;
            report = offset[report];
            report = oscard.bind(tangon)(report);
            oscard = report.TransitionGroup;
            report = {};
            report['items'] = verify;
            verify = _closure1_slot11;
            report['renderItem'] = verify;
            option = _closure1_slot12;
            report['getItemKey'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = tangon.bind(golfie)(michal);
    michal = 'ChatInputSendButton';
    tangon['displayName'] = michal;
    michal = golfie.memo;
    michal = michal.bind(golfie)(tangon);
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat_input/native/accessories/ChatInputSendButton.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();