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
            romeon = entity.guildId;
            offset = entity.channelId;
            verify = entity.messageId;
            option = entity.jumpType;
            golfie = entity.preserveDrawerState;
            oscard = entity.source;
            report = entity.isInitialSetup;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            foxtra = 'CHANNEL_SELECT';
            michal['type'] = foxtra;
            foxtra = _closure1_slot9;
            yankee = null;
            if(!(romeon !== foxtra)) { _fun00002_ip = 94; continue _fun00001 }
 91:
            yankee = romeon;
 94:
            michal['guildId'] = yankee;
            michal['channelId'] = offset;
            michal['messageId'] = verify;
            michal['jumpType'] = option;
            michal['preserveDrawerState'] = golfie;
            michal['source'] = oscard;
            michal['isInitialSetup'] = report;
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
            option = argFoo;
            golfie = arguments[1];
            oscard = arguments[2];
            report = arguments[3];
            entity = undefined;
            if(!(golfie === entity)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            golfie = false;
 20:
            if(!(oscard === entity)) { _fun00004_ip = 26; continue _fun00003 }
 24:
            oscard = false;
 26:
            if(!(report === entity)) { _fun00004_ip = 32; continue _fun00003 }
 30:
            report = {};
 32:
            tangon = _closure1_slot5;
            zuuluu = tangon.getChannel;
            offset = zuuluu.bind(tangon)(option);
            zuuluu = null;
            verify = zuuluu == offset;
            tangon = undefined;
            if(verify) { _fun00004_ip = 70; continue _fun00003 }
 60:
            verify = offset.getGuildId;
            tangon = verify.bind(offset)();
 70:
            if(!(zuuluu != option)) { _fun00004_ip = 78; continue _fun00003 }
 74:
            if(!(zuuluu == tangon)) { _fun00004_ip = 110; continue _fun00003 }
 78:
            offset = _closure1_slot0;
            yankee = _closure1_slot3;
            verify = 10;
            verify = yankee[verify];
            offset = offset.bind(entity)(verify);
            verify = offset.endHangout;
            verify = verify.bind(offset)();
            _fun00004_ip = 142; continue _fun00003;
 110:
            offset = _closure1_slot0;
            yankee = _closure1_slot3;
            verify = 10;
            verify = yankee[verify];
            offset = offset.bind(entity)(verify);
            verify = offset.startHangout;
            verify = verify.bind(offset)(tangon, option);
 142:
            offset = _closure1_slot6;
            verify = offset.isSupported;
            verify = verify.bind(offset)();
            if(!verify) { _fun00004_ip = 235; continue _fun00003 }
 159:
            if(!(zuuluu != option)) { _fun00004_ip = 187; continue _fun00003 }
 163:
            verify = _closure1_slot6;
            zuuluu = verify.getMediaEngine;
            verify = zuuluu.bind(verify)();
            zuuluu = verify.interact;
            zuuluu = zuuluu.bind(verify)();
 187:
            zuuluu = _closure1_slot0;
            verify = _closure1_slot3;
            michal = 11;
            michal = verify[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.selectVoiceChannelAdditional;
            output = zuuluu;
            sizing = option;
            kiloes = tangon;
            backup = golfie;
            foxtra = oscard;
            romeon = report;
            michal = output[michal](sizing, kiloes, backup, foxtra, romeon, yankee);
 235:
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