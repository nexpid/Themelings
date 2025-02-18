// app/modules/guild_sidebar/native/DirectoryChannel.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
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
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    yankee = tangon.CHANNEL_MARGIN_VERTICAL;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    offset['marginVertical'] = yankee;
    yankee = 8;
    offset['marginHorizontal'] = yankee;
    yankee = 7;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.md;
    offset['borderRadius'] = yankee;
    tangon['container'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot8 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            var _closure2_slot0 = zuuluu;
            tangon = entity.selectedChannelId;
            golfie = entity.selected;
            report = undefined;
            var _closure2_slot1 = report;
            entity = _closure1_slot8;
            verify = entity.bind(report)();
            option = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 8;
            entity = offset[entity];
            yankee = option.bind(report)(entity);
            offset = yankee.useStateFromStores;
            entity = _closure1_slot4;
            option = new Array(2);
            option[0] = entity;
            entity = _closure1_slot5;
            option[1] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot5;
                    michal = tangon.getDirectoryChannelIds;
                    entity = _closure2_slot0;
                    report = michal.bind(tangon)(entity);
                    tangon = report.length;
                    michal = 0;
                    entity = null;
                    if(!(michal !== tangon)) { _fun00004_ip = 56; continue _fun00003 }
 38:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getChannel;
                    michal = report[michal];
                    entity = zuuluu.bind(tangon)(michal);
 56:
                    return entity;
                }
            };
            option = offset.bind(yankee)(option, entity);
            entity = null;
            offset = entity == option;
            yankee = undefined;
            if(offset) { _fun00002_ip = 117; continue _fun00001 }
 112:
            yankee = option.id;
 117:
            _closure2_slot1 = yankee;
            if(golfie) { _fun00002_ip = 128; continue _fun00001 }
 124:
            golfie = yankee === tangon;
 128:
            offset = _closure1_slot3;
            romeon = offset.useCallback;
            tangon = new Array(2);
            tangon[0] = zuuluu;
            tangon[1] = yankee;
            zuuluu = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.transitionToGuild;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            foxtra = romeon.bind(offset)(zuuluu, tangon);
            tangon = offset.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = yankee;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 53; continue _fun00005 }
 13:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 10;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.openChannelLongPressActionSheet;
                    entity = _closure2_slot1;
                    entity = michal.bind(zuuluu)(entity);
 53:
                    entity = undefined;
                    return entity;
                }
            };
            romeon = tangon.bind(offset)(michal, zuuluu);
            michal = entity == option;
            entity = null;
            if(michal) { _fun00002_ip = 328; continue _fun00001 }
 200:
            tangon = _closure1_slot7;
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 11;
            michal = yankee[michal];
            zuuluu = offset.bind(report)(michal);
            michal = {};
            michal['onPress'] = foxtra;
            michal['onLongPress'] = romeon;
            verify = verify.container;
            michal['style'] = verify;
            verify = true;
            michal['accessible'] = verify;
            verify = 'button';
            michal['accessibilityRole'] = verify;
            verify = 12;
            verify = yankee[verify];
            offset = offset.bind(report)(verify);
            verify = {};
            verify['channel'] = option;
            verify = offset.bind(report)(verify);
            michal['accessibilityLabel'] = verify;
            verify = {};
            verify['selected'] = golfie;
            michal['accessibilityState'] = verify;
            michal['channel'] = option;
            michal['selected'] = golfie;
            oscard = _closure1_slot6;
            oscard = oscard.ONLY_MENTIONS;
            michal['resolvedUnreadSetting'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 328:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_sidebar/native/DirectoryChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();