// app/modules/opt_in_channels/useShowChannelOptInNotice.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NULL_STRING_GUILD_ID;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelFlags;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/opt_in_channels/useShowChannelOptInNotice.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useShowChannelOptInNotice
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 3;
            entity = tangon[entity];
            tangon = undefined;
            option = oscard.bind(tangon)(entity);
            golfie = option.useOptInEnabledForGuild;
            oscard = null;
            verify = oscard == zuuluu;
            entity = undefined;
            if(verify) { _fun00002_ip = 61; continue _fun00001 }
 51:
            verify = zuuluu.getGuildId;
            entity = verify.bind(zuuluu)();
 61:
            if(!(oscard == entity)) { _fun00002_ip = 71; continue _fun00001 }
 65:
            entity = _closure1_slot3;
            _fun00002_ip = 76; continue _fun00001;
 71:
            entity = zuuluu.guild_id;
 76:
            entity = golfie.bind(option)(entity);
            option = _closure1_slot0;
            verify = _closure1_slot1;
            golfie = 4;
            golfie = verify[golfie];
            yankee = option.bind(tangon)(golfie);
            offset = yankee.useStateFromStores;
            romeon = _closure1_slot2;
            golfie = new Array(1);
            golfie[0] = romeon;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00004_ip = 38; continue _fun00003 }
 16:
                    tangon = _closure1_slot2;
                    zuuluu = tangon.isChannelRecordOrParentOptedIn;
                    michal = _closure2_slot0;
                    entity = zuuluu.bind(tangon)(michal);
 38:
                    return entity;
                }
            };
            michal = offset.bind(yankee)(golfie, michal);
            golfie = 5;
            golfie = verify[golfie];
            option = option.bind(tangon)(golfie);
            golfie = option.useCanSeeOnboardingHome;
            verify = oscard == zuuluu;
            tangon = undefined;
            if(verify) { _fun00002_ip = 163; continue _fun00001 }
 158:
            tangon = zuuluu.guild_id;
 163:
            if(!(oscard == tangon)) { _fun00002_ip = 171; continue _fun00001 }
 167:
            tangon = _closure1_slot3;
 171:
            tangon = golfie.bind(option)(tangon);
            if(!(oscard != zuuluu)) { _fun00002_ip = 234; continue _fun00001 }
 180:
            if(!tangon) { _fun00002_ip = 204; continue _fun00001 }
 183:
            oscard = zuuluu.hasFlag;
            report = _closure1_slot4;
            report = report.IS_GUILD_RESOURCE_CHANNEL;
            tangon = oscard.bind(zuuluu)(report);
 204:
            if(!entity) { _fun00002_ip = 210; continue _fun00001 }
 207:
            entity = !tangon;
 210:
            if(!entity) { _fun00002_ip = 216; continue _fun00001 }
 213:
            entity = !michal;
 216:
            if(!entity) { _fun00002_ip = 232; continue _fun00001 }
 219:
            michal = zuuluu.isThread;
            michal = michal.bind(zuuluu)();
            entity = !michal;
 232:
            return entity;
 234:
            entity = false;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();