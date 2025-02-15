// app/modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: renderChatInputActionButtonGiftAndThread
        _fun101249: for(var _fun101249_ip = 0; ; ) switch(_fun101249_ip) {
 0:
            mike = argBar;
            foxtrot = mike.canStartThreads;
            sizing = mike.channel;
            romeo = mike.disabled;
            kilo = mike.onPress;
            var _closure2_slot0 = kilo;
            entity = mike.shouldShowThread;
            verify = mike.styleButton;
            backup = mike.styleButtonWrapper;
            report = _closure1_slot6;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 5;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = {};
            oscar = argCorge;
            mike['cleanup'] = oscar;
            oscar = argBaz;
            mike['state'] = oscar;
            options = _closure1_slot6;
            golf = _closure1_slot1;
            result = _closure1_slot2;
            if(entity) { _fun101249_ip = 155; continue _fun101249 }
 109:
            entity = 9;
            entity = result[entity];
            oscar = golf.bind(tango)(entity);
            entity = {};
            entity['channel'] = sizing;
            entity['disabled'] = romeo;
            entity['onPress'] = kilo;
            entity['style'] = backup;
            entity['styleButton'] = verify;
            entity = options.bind(tango)(oscar, entity);
            _fun101249_ip = 286; continue _fun101249;
 155:
            oscar = 6;
            oscar = result[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            output = _closure1_slot0;
            backup = 7;
            kilo = result[backup];
            kilo = output.bind(tango)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            backup = result[backup];
            backup = output.bind(tango)(backup);
            backup = backup.t;
            backup = backup.4WNcpq;
            backup = kilo.bind(sizing)(backup);
            oscar['accessibilityLabel'] = backup;
            if(romeo) { _fun101249_ip = 230; continue _fun101249 }
 227:
            romeo = !foxtrot;
 230:
            oscar['disabled'] = romeo;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            yankee = 8;
            yankee = foxtrot[yankee];
            yankee = romeo.bind(tango)(yankee);
            yankee = yankee.ThreadPlusIcon;
            oscar['IconComponent'] = yankee;
            offset = function(argFoo) { // Original name: onPress
                tango = _closure2_slot0;
                entity = _closure1_slot5;
                zulu = entity.THREAD;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            oscar['onPress'] = offset;
            oscar['style'] = verify;
            entity = options.bind(tango)(golf, oscar);
 286:
            mike['children'] = entity;
            entity = argFoo;
            entity = report.bind(tango)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getChatInputActionButtonGiftAndThreadKey
        _fun101251: for(var _fun101251_ip = 0; ; ) switch(_fun101251_ip) {
 0:
            entity = argFoo;
            mike = entity.shouldShowThread;
            entity = 'gift';
            if(!mike) { _fun101251_ip = 20; continue _fun101251 }
 16:
            entity = 'thread';
 20:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    foxtrot = 2;
    tango = oscar[foxtrot];
    tango = report.bind(entity)(tango);
    romeo = tango.CHAT_INPUT_ACTION_BUTTON_MARGIN;
    yankee = tango.CHAT_INPUT_ACTION_BUTTON_SIZE;
    tango = tango.ChatInputActionType;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    romeo = foxtrot * romeo;
    romeo = yankee + romeo;
    offset['width'] = romeo;
    offset['height'] = yankee;
    tango['container'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot7 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: ChatInputActionButtonGiftOrThread
        golf = argFoo;
        var _closure2_slot0 = golf;
        mike = _closure1_slot7;
        tango = undefined;
        report = mike.bind(tango)();
        oscar = _closure1_slot3;
        zulu = oscar.useMemo;
        mike = new Array(1);
        mike[0] = golf;
        entity = function() {
            mike = _closure2_slot0;
            entity = new Array(1);
            entity[0] = mike;
            return entity;
        };
        verify = zulu.bind(oscar)(entity, mike);
        zulu = _closure1_slot6;
        mike = _closure1_slot4;
        entity = {};
        report = report.container;
        entity['style'] = report;
        golf = _closure1_slot6;
        oscar = _closure1_slot0;
        offset = _closure1_slot2;
        report = 10;
        report = offset[report];
        report = oscar.bind(tango)(report);
        oscar = report.TransitionGroup;
        report = {};
        report['items'] = verify;
        verify = _closure1_slot8;
        report['renderItem'] = verify;
        options = _closure1_slot9;
        report['getItemKey'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();