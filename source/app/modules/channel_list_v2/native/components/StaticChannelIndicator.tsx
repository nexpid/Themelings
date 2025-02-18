// app/modules/channel_list_v2/native/components/StaticChannelIndicator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    romeon = 0;
    tangon = oscard[romeon];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot3 = golfie;
    offset = tangon.StyleSheet;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    backup = offset.absoluteFillObject;
    kiloes = verify;
    offset = copyDataProperties(kiloes, backup);
    offset = 'top';
    verify[offset] = romeon;
    offset = 'bottom';
    verify[offset] = romeon;
    romeon = 'center';
    offset = 'justifyContent';
    verify[offset] = romeon;
    tangon['indicatorContainer'] = verify;
    verify = {'width': 8, 'height': 8, 'borderRadius': null, 'marginLeft': 4294967292};
    offset = 4;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.round;
    verify['borderRadius'] = offset;
    tangon['indicator'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_list_v2/native/components/StaticChannelIndicator.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ChannelIndicator
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.unread;
            verify = entity.resolvedUnreadSetting;
            option = entity.style;
            entity = _closure1_slot6;
            report = undefined;
            golfie = entity.bind(report)();
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 5;
            entity = oscard[entity];
            oscard = tangon.bind(report)(entity);
            tangon = oscard.useToken;
            entity = _closure1_slot4;
            entity = entity.ALL_MESSAGES;
            if(!(verify !== entity)) { _fun00002_ip = 106; continue _fun00001 }
 73:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 4;
            entity = offset[entity];
            entity = verify.bind(report)(entity);
            entity = entity.colors;
            entity = entity.CHANNELS_DEFAULT;
            _fun00002_ip = 137; continue _fun00001;
 106:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 4;
            verify = yankee[verify];
            verify = offset.bind(report)(verify);
            verify = verify.colors;
            entity = verify.INTERACTIVE_ACTIVE;
 137:
            offset = tangon.bind(oscard)(entity);
            entity = null;
            if(!zuuluu) { _fun00002_ip = 217; continue _fun00001 }
 147:
            tangon = _closure1_slot5;
            zuuluu = _closure1_slot3;
            michal = {};
            oscard = golfie.indicatorContainer;
            michal['style'] = oscard;
            oscard = {};
            verify = golfie.indicator;
            golfie = new Array(3);
            golfie[0] = verify;
            verify = {};
            verify['backgroundColor'] = offset;
            golfie[1] = verify;
            golfie[2] = option;
            oscard['style'] = golfie;
            oscard = tangon.bind(report)(zuuluu, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 217:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();