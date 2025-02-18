// app/modules/guild_home/useActiveChannels.tsx
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
    tangon = tangon.isTextChannel;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelFlags;
    var _closure1_slot8 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_home/useActiveChannels.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = arguments[1];
            oscard = undefined;
            if(!(zuuluu === oscard)) { _fun00002_ip = 56; continue _fun00001 }
 14:
            golfie = _closure1_slot3;
            michal = new Array(4);
            michal[0] = golfie;
            golfie = _closure1_slot4;
            michal[1] = golfie;
            golfie = _closure1_slot6;
            michal[2] = golfie;
            tangon = _closure1_slot5;
            michal[3] = tangon;
            zuuluu = michal;
 56:
            option = zuuluu;
            michal = option[Symbol.iterator];
            option = michal().next;
            tangon = option().value;
            zuuluu = michal;
            golfie = zuuluu === oscard;
            zuuluu = undefined;
            if(golfie) { _fun00002_ip = 81; continue _fun00001 }
 78:
            zuuluu = tangon;
 81:
            var _closure2_slot0 = zuuluu;
            zuuluu = undefined;
            if(golfie) { _fun00002_ip = 115; continue _fun00001 }
 90:
            verify = option().value;
            tangon = michal;
            tangon = tangon === oscard;
            zuuluu = undefined;
            golfie = tangon;
            if(tangon) { _fun00002_ip = 115; continue _fun00001 }
 109:
            zuuluu = verify;
            golfie = tangon;
 115:
            var _closure2_slot1 = zuuluu;
            tangon = undefined;
            if(golfie) { _fun00002_ip = 149; continue _fun00001 }
 124:
            verify = option().value;
            zuuluu = michal;
            zuuluu = zuuluu === oscard;
            tangon = undefined;
            golfie = zuuluu;
            if(zuuluu) { _fun00002_ip = 149; continue _fun00001 }
 143:
            tangon = verify;
            golfie = zuuluu;
 149:
            zuuluu = undefined;
            if(golfie) { _fun00002_ip = 179; continue _fun00001 }
 154:
            verify = option().value;
            option = michal;
            option = option === oscard;
            zuuluu = undefined;
            golfie = option;
            if(option) { _fun00002_ip = 179; continue _fun00001 }
 173:
            zuuluu = verify;
            golfie = option;
 179:
            if(golfie) { _fun00002_ip = 185; continue _fun00001 }
 182:
            michal.return();
 185:
            var _closure2_slot2 = oscard;
            michal = tangon.getActiveChannelIds;
            option = michal.bind(tangon)(report);
            michal = null;
            if(!(michal == option)) { _fun00002_ip = 212; continue _fun00001 }
 206:
            tangon = new Array(0);
            _fun00002_ip = 230; continue _fun00001;
 212:
            michal = global;
            golfie = michal.Array;
            michal = golfie.from;
            tangon = michal.bind(golfie)(option);
 230:
            michal = zuuluu.getMutedChannels;
            michal = michal.bind(zuuluu)(report);
            _closure2_slot2 = michal;
            zuuluu = tangon.map;
            michal = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.getChannel;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.filter;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 7;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.isNotNullish;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    zuuluu = null;
                    if(!(zuuluu != report)) { _fun00004_ip = 39; continue _fun00003 }
 9:
                    michal = report.hasFlag;
                    entity = _closure1_slot8;
                    entity = entity.ACTIVE_CHANNELS_REMOVED;
                    entity = michal.bind(report)(entity);
                    if(entity) { _fun00004_ip = 243; continue _fun00003 }
 39:
                    oscard = _closure1_slot2;
                    tangon = report.type;
                    entity = undefined;
                    entity = oscard.bind(entity)(tangon);
                    if(entity) { _fun00004_ip = 65; continue _fun00003 }
 61:
                    entity = false;
                    return entity;
 65:
                    golfie = _closure2_slot2;
                    oscard = golfie.has;
                    tangon = report.id;
                    tangon = oscard.bind(golfie)(tangon);
                    if(tangon) { _fun00004_ip = 239; continue _fun00003 }
 93:
                    tangon = report.parent_id;
                    if(!(zuuluu != tangon)) { _fun00004_ip = 126; continue _fun00003 }
 103:
                    golfie = _closure2_slot2;
                    oscard = golfie.has;
                    tangon = report.parent_id;
                    tangon = oscard.bind(golfie)(tangon);
                    if(tangon) { _fun00004_ip = 235; continue _fun00003 }
 126:
                    golfie = _closure2_slot1;
                    oscard = golfie.can;
                    tangon = _closure1_slot7;
                    tangon = tangon.VIEW_CHANNEL;
                    tangon = oscard.bind(golfie)(tangon, report);
                    if(tangon) { _fun00004_ip = 159; continue _fun00003 }
 155:
                    tangon = false;
                    return tangon;
 159:
                    oscard = _closure2_slot0;
                    tangon = oscard.getChannel;
                    entity = report.parent_id;
                    tangon = tangon.bind(oscard)(entity);
                    entity = report.isThread;
                    entity = entity.bind(report)();
                    entity = !entity;
                    if(entity) { _fun00004_ip = 199; continue _fun00003 }
 195:
                    entity = zuuluu == tangon;
 199:
                    if(entity) { _fun00004_ip = 206; continue _fun00003 }
 202:
                    entity = zuuluu == tangon;
 206:
                    if(entity) { _fun00004_ip = 233; continue _fun00003 }
 209:
                    zuuluu = tangon.hasFlag;
                    michal = _closure1_slot8;
                    michal = michal.ACTIVE_CHANNELS_REMOVED;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = !michal;
 233:
                    return entity;
 235:
                    entity = false;
                    return entity;
 239:
                    entity = false;
                    return entity;
 243:
                    entity = false;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getActiveTextChannels'] = michal;
    return entity;
})();