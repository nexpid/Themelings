// app/actions/SelectedChannelActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.ME;
    var _closure1_slot9 = golfie;
    golfie = michal.PopoutWindowKeys;
    var _closure1_slot10 = golfie;
    michal = michal.Routes;
    var _closure1_slot11 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: selectChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.guildId;
            verify = entity.channelId;
            option = entity.messageId;
            golfie = entity.jumpType;
            oscard = entity.preserveDrawerState;
            report = entity.source;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            romeon = 'CHANNEL_SELECT';
            michal['type'] = romeon;
            romeon = _closure1_slot9;
            offset = null;
            if(!(yankee !== romeon)) { _fun00002_ip = 88; continue _fun00001 }
 85:
            offset = yankee;
 88:
            michal['guildId'] = offset;
            michal['channelId'] = verify;
            michal['messageId'] = option;
            michal['jumpType'] = golfie;
            michal['preserveDrawerState'] = oscard;
            michal['source'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['selectChannel'] = golfie;
    golfie = function(argFoo) { // Original name: selectPrivateChannel
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot3;
        entity = 9;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.transitionTo;
        golfie = _closure1_slot11;
        oscard = golfie.CHANNEL;
        report = _closure1_slot9;
        michal = argFoo;
        michal = oscard.bind(golfie)(report, michal);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['selectPrivateChannel'] = golfie;
    golfie = function(argFoo) { // Original name: selectVoiceChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            oscard = arguments[1];
            report = arguments[2];
            entity = undefined;
            if(!(oscard === entity)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            oscard = false;
 17:
            if(!(report === entity)) { _fun00004_ip = 23; continue _fun00003 }
 21:
            report = false;
 23:
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannel;
            verify = zuuluu.bind(tangon)(golfie);
            zuuluu = null;
            option = zuuluu == verify;
            tangon = undefined;
            if(option) { _fun00004_ip = 61; continue _fun00003 }
 51:
            option = verify.getGuildId;
            tangon = option.bind(verify)();
 61:
            if(!(zuuluu != golfie)) { _fun00004_ip = 69; continue _fun00003 }
 65:
            if(!(zuuluu == tangon)) { _fun00004_ip = 101; continue _fun00003 }
 69:
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            option = 10;
            option = offset[option];
            verify = verify.bind(entity)(option);
            option = verify.endHangout;
            option = option.bind(verify)();
            _fun00004_ip = 133; continue _fun00003;
 101:
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            option = 10;
            option = offset[option];
            verify = verify.bind(entity)(option);
            option = verify.startHangout;
            option = option.bind(verify)(tangon, golfie);
 133:
            verify = _closure1_slot6;
            option = verify.isSupported;
            option = option.bind(verify)();
            if(!option) { _fun00004_ip = 223; continue _fun00003 }
 150:
            if(!(zuuluu != golfie)) { _fun00004_ip = 178; continue _fun00003 }
 154:
            option = _closure1_slot6;
            zuuluu = option.getMediaEngine;
            option = zuuluu.bind(option)();
            zuuluu = option.interact;
            zuuluu = zuuluu.bind(option)();
 178:
            zuuluu = _closure1_slot0;
            option = _closure1_slot3;
            michal = 11;
            michal = option[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.selectVoiceChannelAdditional;
            kiloes = zuuluu;
            backup = golfie;
            foxtra = tangon;
            romeon = oscard;
            yankee = report;
            michal = kiloes[michal](backup, foxtra, romeon, yankee, offset);
 223:
            return entity;
        }
    };
    michal['selectVoiceChannel'] = golfie;
    tangon = function() { // Original name: disconnect
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = this;
            zuuluu = _closure1_slot4;
            entity = zuuluu.getRemoteSessionId;
            oscard = entity.bind(zuuluu)();
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00006_ip = 59; continue _fun00005 }
 26:
            golfie = _closure1_slot2;
            report = _closure1_slot3;
            entity = 12;
            report = report[entity];
            entity = undefined;
            report = golfie.bind(entity)(report);
            entity = report.remoteDisconnect;
            entity = entity.bind(report)(oscard);
 59:
            oscard = _closure1_slot0;
            report = _closure1_slot3;
            entity = 13;
            report = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(report);
            report = oscard.isVoicePanelEnabled;
            report = report.bind(oscard)();
            if(report) { _fun00006_ip = 306; continue _fun00005 }
 97:
            option = _closure1_slot5;
            oscard = option.getChannel;
            golfie = _closure1_slot7;
            report = golfie.getChannelId;
            report = report.bind(golfie)();
            option = oscard.bind(option)(report);
            report = golfie.getChannelId;
            oscard = report.bind(golfie)();
            report = golfie.getVoiceChannelId;
            report = report.bind(golfie)();
            report = oscard === report;
            if(!report) { _fun00006_ip = 177; continue _fun00005 }
 152:
            oscard = zuuluu == option;
            golfie = undefined;
            if(oscard) { _fun00006_ip = 171; continue _fun00005 }
 161:
            oscard = option.isThread;
            golfie = oscard.bind(option)();
 171:
            oscard = true;
            report = oscard === golfie;
 177:
            oscard = tangon.selectVoiceChannel;
            oscard = oscard.bind(tangon)(zuuluu);
            golfie = _closure1_slot2;
            option = _closure1_slot3;
            oscard = 14;
            oscard = option[oscard];
            option = golfie.bind(entity)(oscard);
            golfie = option.close;
            oscard = _closure1_slot10;
            oscard = oscard.CHANNEL_CALL_POPOUT;
            oscard = golfie.bind(option)(oscard);
            if(!report) { _fun00006_ip = 317; continue _fun00005 }
 232:
            oscard = _closure1_slot8;
            report = oscard.getGuildId;
            option = report.bind(oscard)();
            if(!(zuuluu != option)) { _fun00006_ip = 317; continue _fun00005 }
 250:
            golfie = _closure1_slot0;
            verify = _closure1_slot3;
            michal = 9;
            michal = verify[michal];
            oscard = golfie.bind(entity)(michal);
            report = oscard.transitionTo;
            michal = 15;
            michal = verify[michal];
            golfie = golfie.bind(entity)(michal);
            michal = golfie.previousTextChannelRouteForGuild;
            michal = michal.bind(golfie)(option);
            michal = report.bind(oscard)(michal);
            _fun00006_ip = 317; continue _fun00005;
 306:
            michal = tangon.selectVoiceChannel;
            michal = michal.bind(tangon)(zuuluu);
 317:
            return entity;
        }
    };
    michal['disconnect'] = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/SelectedChannelActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();