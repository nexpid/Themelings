// app/modules/chat_input/native/accessories/ChatInputSendButton.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: renderChatInputSendButton
        report = argFoo;
        tango = _closure1_slot7;
        zulu = _closure1_slot10;
        mike = {};
        mike['type'] = report;
        entity = argBaz;
        mike['state'] = entity;
        entity = argCorge;
        mike['cleanup'] = entity;
        golf = argBar;
        options = mike;
        entity = copyDataProperties(options, golf);
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike, report);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getChatInputSendButtonItemKey
        _fun101324: for(var _fun101324_ip = 0; ; ) switch(_fun101324_ip) {
 0:
            entity = argFoo;
            mike = entity.isOnCooldown;
            tango = entity.sendVoiceMessageEnabled;
            entity = entity.sendEnabled;
            zulu = _closure1_slot8;
            if(tango) { _fun101324_ip = 50; continue _fun101324 }
 31:
            if(entity) { _fun101324_ip = 42; continue _fun101324 }
 34:
            entity = zulu.BUTTON_SEND_DISABLED;
            _fun101324_ip = 48; continue _fun101324;
 42:
            entity = zulu.BUTTON_SEND;
 48:
            _fun101324_ip = 70; continue _fun101324;
 50:
            if(mike) { _fun101324_ip = 61; continue _fun101324 }
 53:
            mike = zulu.BUTTON_SEND_VOICE_MESSAGE;
            _fun101324_ip = 67; continue _fun101324;
 61:
            mike = zulu.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
 67:
            entity = mike;
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    backup = 2;
    tango = oscar[backup];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = romeo.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.CHAT_INPUT_ACTION_BUTTON_MARGIN;
    yankee = tango.CHAT_INPUT_ACTION_BUTTON_SIZE;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot7 = tango;
    tango = {};
    options = 'send-button';
    tango['BUTTON_SEND'] = options;
    options = 'send-button-disabled';
    tango['BUTTON_SEND_DISABLED'] = options;
    options = 'voice-message-button';
    tango['BUTTON_SEND_VOICE_MESSAGE'] = options;
    options = 'voice-message-button-disabled';
    tango['BUTTON_SEND_VOICE_MESSAGE_DISABLED'] = options;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    foxtrot = backup * foxtrot;
    foxtrot = yankee + foxtrot;
    offset['width'] = foxtrot;
    offset['height'] = yankee;
    tango['container'] = offset;
    offset = {};
    yankee = 7;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_BRAND;
    offset['backgroundColor'] = foxtrot;
    tango['sendButtonActive'] = offset;
    offset = {};
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.WHITE;
    offset['tintColor'] = yankee;
    tango['sendButtonIconActive'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot9 = tango;
    options = golf.memo;
    tango = function(argFoo) {
        _fun101325: for(var _fun101325_ip = 0; ; ) switch(_fun101325_ip) {
 0:
            entity = argFoo;
            romeo = entity.onSendMessage;
            yankee = entity.sendEnabled;
            offset = entity.isOnCooldown;
            verify = entity.channelId;
            report = entity.state;
            options = entity.cleanup;
            golf = entity.type;
            entity = _closure1_slot9;
            tango = undefined;
            foxtrot = entity.bind(tango)();
            zulu = _closure1_slot7;
            mike = _closure1_slot1;
            backup = _closure1_slot2;
            entity = 8;
            entity = backup[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['cleanup'] = options;
            entity['state'] = report;
            report = _closure1_slot8;
            report = report.BUTTON_SEND_VOICE_MESSAGE;
            if(!(golf !== report)) { _fun101325_ip = 276; continue _fun101325 }
 107:
            report = _closure1_slot8;
            report = report.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
            if(!(golf !== report)) { _fun101325_ip = 276; continue _fun101325 }
 124:
            options = _closure1_slot7;
            golf = _closure1_slot1;
            output = _closure1_slot2;
            report = 10;
            report = output[report];
            golf = golf.bind(tango)(report);
            report = {};
            backup = true;
            report['active'] = backup;
            backup = foxtrot.sendButtonActive;
            report['activeStyle'] = backup;
            foxtrot = foxtrot.sendButtonIconActive;
            report['activeIconStyle'] = foxtrot;
            sizing = _closure1_slot0;
            foxtrot = 11;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(tango)(foxtrot);
            foxtrot = foxtrot.SendMessageIcon;
            report['IconComponent'] = foxtrot;
            foxtrot = 12;
            backup = output[foxtrot];
            backup = sizing.bind(tango)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.TXNS7e;
            foxtrot = backup.bind(kilo)(foxtrot);
            report['accessibilityLabel'] = foxtrot;
            report['onPress'] = romeo;
            yankee = !yankee;
            report['disabled'] = yankee;
            report = options.bind(tango)(golf, report);
            _fun101325_ip = 316; continue _fun101325;
 276:
            options = _closure1_slot7;
            golf = _closure1_slot1;
            yankee = _closure1_slot2;
            oscar = 9;
            oscar = yankee[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar['disabled'] = offset;
            oscar['channelId'] = verify;
            report = options.bind(tango)(golf, oscar);
 316:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = options.bind(golf)(tango);
    var _closure1_slot10 = tango;
    tango = golf.forwardRef;
    mike = function(argFoo, argBar) {
        _fun101326: for(var _fun101326_ip = 0; ; ) switch(_fun101326_ip) {
 0:
            tango = argFoo;
            zulu = tango.channel;
            var _closure2_slot0 = zulu;
            oscar = tango.defaultValue;
            mike = tango.canSendVoiceMessage;
            romeo = tango.hasPendingAttachments;
            foxtrot = tango.hasPendingEdit;
            offset = tango.onSendMessage;
            var _closure2_slot1 = offset;
            golf = tango.requireTextContent;
            tango = undefined;
            if(!(golf === tango)) { _fun101326_ip = 62; continue _fun101326 }
 60:
            golf = false;
 62:
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            report = _closure1_slot9;
            report = report.bind(tango)();
            backup = _closure1_slot4;
            yankee = backup.useState;
            verify = oscar.length;
            oscar = 0;
            verify = verify > oscar;
            backup = yankee.bind(backup)(verify);
            yankee = _closure1_slot3;
            verify = 2;
            yankee = yankee.bind(tango)(backup, verify);
            oscar = yankee[oscar];
            verify = 1;
            verify = yankee[verify];
            _closure2_slot2 = verify;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 13;
            verify = backup[verify];
            sizing = yankee.bind(tango)(verify);
            kilo = sizing.useStateFromStores;
            verify = _closure1_slot6;
            backup = new Array(1);
            backup[0] = verify;
            yankee = new Array(1);
            yankee[0] = zulu;
            verify = function() {
                zulu = _closure1_slot6;
                mike = zulu.isChannelOnCooldown;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            yankee = kilo.bind(sizing)(backup, verify, yankee);
            _closure2_slot3 = yankee;
            verify = !yankee;
            if(verify) { _fun101326_ip = 214; continue _fun101326 }
 211:
            verify = foxtrot;
 214:
            if(!verify) { _fun101326_ip = 232; continue _fun101326 }
 217:
            if(oscar) { _fun101326_ip = 223; continue _fun101326 }
 220:
            oscar = romeo;
 223:
            if(oscar) { _fun101326_ip = 229; continue _fun101326 }
 226:
            oscar = !golf;
 229:
            verify = oscar;
 232:
            _closure2_slot4 = verify;
            if(!mike) { _fun101326_ip = 242; continue _fun101326 }
 239:
            mike = !verify;
 242:
            _closure2_slot5 = mike;
            oscar = _closure1_slot4;
            golf = oscar.useMemo;
            romeo = zulu.id;
            zulu = new Array(5);
            zulu[0] = romeo;
            zulu[1] = yankee;
            zulu[2] = offset;
            zulu[3] = verify;
            zulu[4] = mike;
            mike = function() {
                mike = {};
                zulu = _closure2_slot0;
                zulu = zulu.id;
                mike['channelId'] = zulu;
                zulu = _closure2_slot3;
                mike['isOnCooldown'] = zulu;
                zulu = _closure2_slot1;
                mike['onSendMessage'] = zulu;
                zulu = _closure2_slot4;
                mike['sendEnabled'] = zulu;
                entity = _closure2_slot5;
                mike['sendVoiceMessageEnabled'] = entity;
                entity = new Array(1);
                entity[0] = mike;
                return entity;
            };
            verify = golf.bind(oscar)(mike, zulu);
            zulu = oscar.useImperativeHandle;
            mike = argBar;
            entity = function() {
                entity = {};
                mike = _closure2_slot2;
                entity['setHasText'] = mike;
                return entity;
            };
            entity = zulu.bind(oscar)(mike, entity);
            zulu = _closure1_slot7;
            mike = _closure1_slot5;
            entity = {};
            report = report.container;
            entity['style'] = report;
            golf = _closure1_slot7;
            oscar = _closure1_slot0;
            offset = _closure1_slot2;
            report = 14;
            report = offset[report];
            report = oscar.bind(tango)(report);
            oscar = report.TransitionGroup;
            report = {};
            report['items'] = verify;
            verify = _closure1_slot11;
            report['renderItem'] = verify;
            options = _closure1_slot12;
            report['getItemKey'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = tango.bind(golf)(mike);
    mike = 'ChatInputSendButton';
    tango['displayName'] = mike;
    mike = golf.memo;
    mike = mike.bind(golf)(tango);
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/chat_input/native/accessories/ChatInputSendButton.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();