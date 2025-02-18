// app/modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useTextChannelPressEvents
        oscard = argFoo;
        zuuluu = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = zuuluu;
        entity = {};
        report = _closure1_slot3;
        golfie = report.useCallback;
        option = oscard.id;
        tangon = new Array(3);
        tangon[0] = option;
        option = oscard.guild_id;
        tangon[1] = option;
        tangon[2] = zuuluu;
        zuuluu = function() {
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 2;
            michal = report[entity];
            entity = undefined;
            verify = tangon.bind(entity)(michal);
            option = verify.preload;
            michal = _closure2_slot0;
            golfie = michal.guild_id;
            tangon = michal.id;
            tangon = option.bind(verify)(golfie, tangon);
            tangon = _closure1_slot0;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.transitionToChannel;
            zuuluu = michal.id;
            michal = {};
            oscard = _closure2_slot1;
            michal['navigationReplace'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        zuuluu = golfie.bind(report)(zuuluu, tangon);
        entity['onPress'] = zuuluu;
        tangon = report.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure1_slot4;
                tangon = report.getChannel;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.parent_id;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00002_ip = 66; continue _fun00001 }
 36:
                zuuluu = tangon.isForumLikeChannel;
                zuuluu = zuuluu.bind(tangon)();
                if(!zuuluu) { _fun00002_ip = 66; continue _fun00001 }
 49:
                report = _closure2_slot0;
                zuuluu = report.isForumPost;
                zuuluu = zuuluu.bind(report)();
                if(zuuluu) { _fun00002_ip = 165; continue _fun00001 }
 66:
                report = _closure2_slot0;
                zuuluu = report.isThread;
                zuuluu = zuuluu.bind(report)();
                if(zuuluu) { _fun00002_ip = 127; continue _fun00001 }
 83:
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 6;
                report = report[zuuluu];
                zuuluu = undefined;
                oscard = oscard.bind(zuuluu)(report);
                report = oscard.openChannelLongPressActionSheet;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.id;
                zuuluu = report.bind(oscard)(zuuluu);
                _fun00002_ip = 197; continue _fun00001;
 127:
                report = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 5;
                zuuluu = oscard[zuuluu];
                oscard = undefined;
                report = report.bind(oscard)(zuuluu);
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.id;
                zuuluu = report.bind(oscard)(zuuluu);
                _fun00002_ip = 197; continue _fun00001;
 165:
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 4;
                michal = zuuluu[michal];
                zuuluu = undefined;
                michal = report.bind(zuuluu)(michal);
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity, tangon);
 197:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['onLongPress'] = michal;
        michal = 32;
        entity['unstable_pressDelay'] = michal;
        return entity;
    };
    zuuluu['useTextChannelPressEvents'] = michal;
    return entity;
})();