// app/modules/welcome_screen/useWelcomeScreenEnabled.tsx
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isGuildTextChannelType;
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
    tangon = tangon.GuildFeatures;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/welcome_screen/useWelcomeScreenEnabled.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useWelcomeScreenEnabled
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot3;
        michal = new Array(3);
        michal[0] = oscard;
        oscard = _closure1_slot4;
        michal[1] = oscard;
        report = _closure1_slot5;
        michal[2] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure1_slot4;
                tangon = report.getGuild;
                michal = _closure2_slot1;
                report = tangon.bind(report)(michal);
                oscard = null;
                michal = oscard == report;
                tangon = undefined;
                golfie = undefined;
                if(michal) { _fun00002_ip = 58; continue _fun00001 }
 37:
                option = report.hasFeature;
                michal = _closure1_slot6;
                michal = michal.WELCOME_SCREEN_ENABLED;
                golfie = option.bind(report)(michal);
 58:
                michal = true;
                if(!(michal === golfie)) { _fun00002_ip = 88; continue _fun00001 }
 64:
                golfie = report.hasFeature;
                michal = _closure1_slot6;
                michal = michal.COMMUNITY;
                michal = golfie.bind(report)(michal);
                if(michal) { _fun00002_ip = 92; continue _fun00001 }
 88:
                michal = false;
                return michal;
 92:
                golfie = report.hasFeature;
                michal = _closure1_slot6;
                michal = michal.GUILD_SERVER_GUIDE;
                michal = golfie.bind(report)(michal);
                if(michal) { _fun00002_ip = 205; continue _fun00001 }
 116:
                option = _closure1_slot3;
                michal = option.getChannel;
                golfie = _closure2_slot0;
                michal = michal.bind(option)(golfie);
                verify = _closure1_slot5;
                option = verify.getChannelId;
                entity = _closure2_slot1;
                entity = option.bind(verify)(entity);
                entity = golfie === entity;
                if(!entity) { _fun00002_ip = 164; continue _fun00001 }
 160:
                entity = oscard != michal;
 164:
                if(!entity) { _fun00002_ip = 186; continue _fun00001 }
 167:
                oscard = michal.getGuildId;
                oscard = oscard.bind(michal)();
                report = report.id;
                entity = oscard === report;
 186:
                if(!entity) { _fun00002_ip = 203; continue _fun00001 }
 189:
                zuuluu = _closure1_slot2;
                michal = michal.type;
                entity = zuuluu.bind(tangon)(michal);
 203:
                return entity;
 205:
                entity = false;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();