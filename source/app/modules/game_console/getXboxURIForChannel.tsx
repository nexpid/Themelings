// app/modules/game_console/getXboxURIForChannel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.XBOX_HANDOFF_SEARCH_PARAMS;
    var _closure1_slot6 = golfie;
    tangon = tangon.XBOX_URL_BASE;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Endpoints;
    var _closure1_slot8 = golfie;
    tangon = tangon.ZERO_STRING_GUILD_ID;
    var _closure1_slot9 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_console/getXboxURIForChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: getXboxURIForChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            foxtra = argFoo;
            entity = argBar;
            report = entity.nonce;
            entity = entity.forQRCode;
            michal = foxtra.getGuildId;
            oscard = michal.bind(foxtra)();
            tangon = _closure1_slot2;
            zuuluu = tangon.getGuild;
            verify = zuuluu.bind(tangon)(oscard);
            tangon = _closure1_slot6;
            zuuluu = {};
            option = null;
            if(!(option == oscard)) { _fun00002_ip = 61; continue _fun00001 }
 57:
            oscard = _closure1_slot9;
 61:
            zuuluu['guildId'] = oscard;
            oscard = foxtra.id;
            zuuluu['channelId'] = oscard;
            offset = _closure1_slot0;
            golfie = _closure1_slot1;
            oscard = 6;
            golfie = golfie[oscard];
            oscard = undefined;
            romeon = offset.bind(oscard)(golfie);
            yankee = romeon.computeChannelName;
            offset = _closure1_slot5;
            golfie = _closure1_slot4;
            golfie = yankee.bind(romeon)(foxtra, offset, golfie);
            zuuluu['channelName'] = golfie;
            offset = option == verify;
            golfie = undefined;
            if(offset) { _fun00002_ip = 136; continue _fun00001 }
 131:
            golfie = verify.name;
 136:
            if(!(option == golfie)) { _fun00002_ip = 195; continue _fun00001 }
 140:
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            option = 7;
            verify = romeon[option];
            verify = yankee.bind(oscard)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(oscard)(option);
            option = option.t;
            option = option.LJpTRE;
            golfie = verify.bind(offset)(option);
 195:
            zuuluu['guildName'] = golfie;
            option = _closure1_slot3;
            golfie = option.isSelfMute;
            golfie = golfie.bind(option)();
            zuuluu['muted'] = golfie;
            golfie = option.isSelfDeaf;
            golfie = golfie.bind(option)();
            zuuluu['deafened'] = golfie;
            zuuluu['nonce'] = report;
            zuuluu = tangon.bind(oscard)(zuuluu);
            if(entity) { _fun00002_ip = 290; continue _fun00001 }
 247:
            option = _closure1_slot7;
            entity = zuuluu.toString;
            golfie = entity.bind(zuuluu)();
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            tangon = '';
            entity = '?';
            entity = report.bind(tangon)(option, entity, golfie);
            _fun00002_ip = 364; continue _fun00001;
 290:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 8;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.getAPIBaseURL;
            output = tangon.bind(report)();
            michal = _closure1_slot8;
            sizing = michal.XBOX_HANDOFF;
            michal = zuuluu.toString;
            backup = michal.bind(zuuluu)();
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            result = '';
            kiloes = '?';
            entity = result[tangon](output, sizing, kiloes, backup, foxtra);
 364:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();