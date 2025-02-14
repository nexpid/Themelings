// app/actions/SelectedChannelActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    mike = 7;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.ME;
    var _closure1_slot9 = golf;
    golf = mike.PopoutWindowKeys;
    var _closure1_slot10 = golf;
    mike = mike.Routes;
    var _closure1_slot11 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: selectChannel
        _fun57201: for(var _fun57201_ip = 0; ; ) switch(_fun57201_ip) {
 0:
            entity = argFoo;
            yankee = entity.guildId;
            verify = entity.channelId;
            options = entity.messageId;
            golf = entity.jumpType;
            oscar = entity.preserveDrawerState;
            report = entity.source;
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            romeo = 'CHANNEL_SELECT';
            mike['type'] = romeo;
            romeo = _closure1_slot9;
            offset = null;
            if(!(yankee !== romeo)) { _fun57201_ip = 88; continue _fun57201 }
 85:
            offset = yankee;
 88:
            mike['guildId'] = offset;
            mike['channelId'] = verify;
            mike['messageId'] = options;
            mike['jumpType'] = golf;
            mike['preserveDrawerState'] = oscar;
            mike['source'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['selectChannel'] = golf;
    golf = function(argFoo) { // Original name: selectPrivateChannel
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.transitionTo;
        golf = _closure1_slot11;
        oscar = golf.CHANNEL;
        report = _closure1_slot9;
        mike = argFoo;
        mike = oscar.bind(golf)(report, mike);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['selectPrivateChannel'] = golf;
    golf = function(argFoo) { // Original name: selectVoiceChannel
        _fun57203: for(var _fun57203_ip = 0; ; ) switch(_fun57203_ip) {
 0:
            golf = argFoo;
            oscar = arguments[1];
            report = arguments[2];
            entity = undefined;
            if(!(oscar === entity)) { _fun57203_ip = 17; continue _fun57203 }
 15:
            oscar = false;
 17:
            if(!(report === entity)) { _fun57203_ip = 23; continue _fun57203 }
 21:
            report = false;
 23:
            tango = _closure1_slot5;
            zulu = tango.getChannel;
            verify = zulu.bind(tango)(golf);
            zulu = null;
            options = zulu == verify;
            tango = undefined;
            if(options) { _fun57203_ip = 61; continue _fun57203 }
 51:
            options = verify.getGuildId;
            tango = options.bind(verify)();
 61:
            if(!(zulu != golf)) { _fun57203_ip = 69; continue _fun57203 }
 65:
            if(!(zulu == tango)) { _fun57203_ip = 101; continue _fun57203 }
 69:
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            options = 10;
            options = offset[options];
            verify = verify.bind(entity)(options);
            options = verify.endHangout;
            options = options.bind(verify)();
            _fun57203_ip = 133; continue _fun57203;
 101:
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            options = 10;
            options = offset[options];
            verify = verify.bind(entity)(options);
            options = verify.startHangout;
            options = options.bind(verify)(tango, golf);
 133:
            verify = _closure1_slot6;
            options = verify.isSupported;
            options = options.bind(verify)();
            if(!options) { _fun57203_ip = 223; continue _fun57203 }
 150:
            if(!(zulu != golf)) { _fun57203_ip = 178; continue _fun57203 }
 154:
            options = _closure1_slot6;
            zulu = options.getMediaEngine;
            options = zulu.bind(options)();
            zulu = options.interact;
            zulu = zulu.bind(options)();
 178:
            zulu = _closure1_slot0;
            options = _closure1_slot3;
            mike = 11;
            mike = options[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.selectVoiceChannelAdditional;
            kilo = zulu;
            backup = golf;
            foxtrot = tango;
            romeo = oscar;
            yankee = report;
            mike = kilo[mike](backup, foxtrot, romeo, yankee, offset);
 223:
            return entity;
        }
    };
    mike['selectVoiceChannel'] = golf;
    tango = function() { // Original name: disconnect
        _fun57204: for(var _fun57204_ip = 0; ; ) switch(_fun57204_ip) {
 0:
            tango = this;
            zulu = _closure1_slot4;
            entity = zulu.getRemoteSessionId;
            oscar = entity.bind(zulu)();
            zulu = null;
            if(!(zulu != oscar)) { _fun57204_ip = 59; continue _fun57204 }
 26:
            golf = _closure1_slot2;
            report = _closure1_slot3;
            entity = 12;
            report = report[entity];
            entity = undefined;
            report = golf.bind(entity)(report);
            entity = report.remoteDisconnect;
            entity = entity.bind(report)(oscar);
 59:
            oscar = _closure1_slot0;
            report = _closure1_slot3;
            entity = 13;
            report = report[entity];
            entity = undefined;
            oscar = oscar.bind(entity)(report);
            report = oscar.isVoicePanelEnabled;
            report = report.bind(oscar)();
            if(report) { _fun57204_ip = 306; continue _fun57204 }
 97:
            options = _closure1_slot5;
            oscar = options.getChannel;
            golf = _closure1_slot7;
            report = golf.getChannelId;
            report = report.bind(golf)();
            options = oscar.bind(options)(report);
            report = golf.getChannelId;
            oscar = report.bind(golf)();
            report = golf.getVoiceChannelId;
            report = report.bind(golf)();
            report = oscar === report;
            if(!report) { _fun57204_ip = 177; continue _fun57204 }
 152:
            oscar = zulu == options;
            golf = undefined;
            if(oscar) { _fun57204_ip = 171; continue _fun57204 }
 161:
            oscar = options.isThread;
            golf = oscar.bind(options)();
 171:
            oscar = true;
            report = oscar === golf;
 177:
            oscar = tango.selectVoiceChannel;
            oscar = oscar.bind(tango)(zulu);
            golf = _closure1_slot2;
            options = _closure1_slot3;
            oscar = 14;
            oscar = options[oscar];
            options = golf.bind(entity)(oscar);
            golf = options.close;
            oscar = _closure1_slot10;
            oscar = oscar.CHANNEL_CALL_POPOUT;
            oscar = golf.bind(options)(oscar);
            if(!report) { _fun57204_ip = 317; continue _fun57204 }
 232:
            oscar = _closure1_slot8;
            report = oscar.getGuildId;
            options = report.bind(oscar)();
            if(!(zulu != options)) { _fun57204_ip = 317; continue _fun57204 }
 250:
            golf = _closure1_slot0;
            verify = _closure1_slot3;
            mike = 9;
            mike = verify[mike];
            oscar = golf.bind(entity)(mike);
            report = oscar.transitionTo;
            mike = 15;
            mike = verify[mike];
            golf = golf.bind(entity)(mike);
            mike = golf.previousTextChannelRouteForGuild;
            mike = mike.bind(golf)(options);
            mike = report.bind(oscar)(mike);
            _fun57204_ip = 317; continue _fun57204;
 306:
            mike = tango.selectVoiceChannel;
            mike = mike.bind(tango)(zulu);
 317:
            return entity;
        }
    };
    mike['disconnect'] = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/SelectedChannelActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();