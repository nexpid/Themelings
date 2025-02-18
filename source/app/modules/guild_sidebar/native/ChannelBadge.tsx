// app/modules/guild_sidebar/native/ChannelBadge.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = function() {
        entity = {};
        michal = {};
        zuuluu = 4;
        michal['paddingStart'] = zuuluu;
        entity['channelInfoContainer'] = michal;
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_sidebar/native/ChannelBadge.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ChannelBadge
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            verify = michal.mentionCount;
            option = michal.isMentionLowImportance;
            entity = michal.isNewChannel;
            kiloes = michal.postsWithUnreadsCount;
            michal = michal.muted;
            zuuluu = _closure1_slot6;
            report = undefined;
            golfie = zuuluu.bind(report)();
            tangon = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 5;
            zuuluu = offset[zuuluu];
            yankee = tangon.bind(report)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot4;
                entity = entity.locale;
                return entity;
            };
            backup = offset.bind(yankee)(tangon, zuuluu);
            zuuluu = null;
            if(!(zuuluu != verify)) { _fun00002_ip = 113; continue _fun00001 }
 104:
            tangon = 0;
            if(!(!(verify > tangon))) { _fun00002_ip = 324; continue _fun00001 }
 113:
            if(entity) { _fun00002_ip = 264; continue _fun00001 }
 119:
            tangon = zuuluu != michal;
            entity = null;
            if(!tangon) { _fun00002_ip = 262; continue _fun00001 }
 131:
            entity = null;
            if(michal) { _fun00002_ip = 262; continue _fun00001 }
 139:
            michal = zuuluu != kiloes;
            entity = null;
            if(!michal) { _fun00002_ip = 262; continue _fun00001 }
 148:
            michal = 0;
            michal = kiloes > michal;
            entity = null;
            if(!michal) { _fun00002_ip = 262; continue _fun00001 }
 159:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot3;
            michal = {};
            offset = golfie.channelInfoContainer;
            michal['style'] = offset;
            foxtra = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 8;
            offset = sizing[offset];
            offset = foxtra.bind(report)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-xs/semibold', 'color': 'text-muted'};
            romeon = 9;
            romeon = sizing[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = foxtra.humanizeValue;
            romeon = romeon.bind(foxtra)(kiloes, backup);
            offset['children'] = romeon;
            offset = tangon.bind(report)(yankee, offset);
            michal['children'] = offset;
            entity = tangon.bind(report)(zuuluu, michal);
 262:
            _fun00002_ip = 322; continue _fun00001;
 264:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot3;
            michal = {};
            offset = golfie.channelInfoContainer;
            michal['style'] = offset;
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 7;
            offset = romeon[offset];
            yankee = yankee.bind(report)(offset);
            offset = {};
            offset = tangon.bind(report)(yankee, offset);
            michal['children'] = offset;
            entity = tangon.bind(report)(zuuluu, michal);
 322:
            _fun00002_ip = 392; continue _fun00001;
 324:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot3;
            michal = {};
            golfie = golfie.channelInfoContainer;
            michal['style'] = golfie;
            golfie = _closure1_slot1;
            offset = _closure1_slot2;
            oscard = 6;
            oscard = offset[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = {};
            oscard['mentionsCount'] = verify;
            oscard['isMentionLowImportance'] = option;
            oscard = tangon.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 392:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();