// app/modules/messages/isMessagePinnable.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ChannelTypes;
    var _closure1_slot4 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/isMessagePinnable.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: isMessagePinnable
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argBar;
            entity = zuuluu.isSystemDM;
            entity = entity.bind(zuuluu)();
            entity = !entity;
            if(!entity) { _fun00002_ip = 55; continue _fun00001 }
 19:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 2;
            michal = report[michal];
            report = undefined;
            tangon = tangon.bind(report)(michal);
            michal = argFoo;
            michal = tangon.bind(report)(michal);
            entity = !michal;
 55:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 3;
            tangon = oscard[tangon];
            oscard = undefined;
            tangon = report.bind(oscard)(tangon);
            golfie = tangon.GuildPinPermissionExperiment;
            report = golfie.getCurrentConfig;
            tangon = {};
            option = zuuluu.guild_id;
            tangon['guildId'] = option;
            option = 'pin util';
            tangon['location'] = option;
            tangon = report.bind(golfie)(tangon);
            tangon = tangon.enabled;
            option = _closure1_slot3;
            golfie = option.can;
            report = _closure1_slot5;
            report = report.MANAGE_MESSAGES;
            golfie = golfie.bind(option)(report, zuuluu);
            if(tangon) { _fun00002_ip = 157; continue _fun00001 }
 152:
            tangon = golfie;
            _fun00002_ip = 192; continue _fun00001;
 157:
            report = golfie;
            if(golfie) { _fun00002_ip = 189; continue _fun00001 }
 163:
            verify = _closure1_slot3;
            option = verify.can;
            golfie = _closure1_slot5;
            golfie = golfie.PIN_MESSAGES;
            report = option.bind(verify)(golfie, zuuluu);
 189:
            tangon = report;
 192:
            if(!entity) { _fun00002_ip = 211; continue _fun00001 }
 195:
            if(tangon) { _fun00002_ip = 208; continue _fun00001 }
 198:
            report = zuuluu.isPrivate;
            tangon = report.bind(zuuluu)();
 208:
            entity = tangon;
 211:
            if(!entity) { _fun00002_ip = 245; continue _fun00001 }
 214:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 4;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.getIsActiveChannelOrUnarchivableThread;
            entity = tangon.bind(report)(zuuluu);
 245:
            if(!entity) { _fun00002_ip = 267; continue _fun00001 }
 248:
            report = zuuluu.type;
            tangon = _closure1_slot4;
            tangon = tangon.GUILD_VOICE;
            entity = report !== tangon;
 267:
            if(!entity) { _fun00002_ip = 289; continue _fun00001 }
 270:
            zuuluu = zuuluu.type;
            michal = _closure1_slot4;
            michal = michal.GUILD_STAGE_VOICE;
            entity = zuuluu !== michal;
 289:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();