// app/modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PixelRatio;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GUILD_ITEM_SIZE;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.BADGE_PADDING;
    var _closure1_slot4 = golfie;
    tangon = tangon.BADGE_SIZE;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: computeGuildsBarCutout
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.position;
            tangon = entity.containerSize;
            offset = undefined;
            if(!(tangon === offset)) { _fun00002_ip = 27; continue _fun00001 }
 20:
            tangon = _closure1_slot3;
 27:
            report = entity.width;
            if(!(report === offset)) { _fun00002_ip = 43; continue _fun00001 }
 36:
            report = _closure1_slot5;
 43:
            oscard = entity.height;
            if(!(oscard === offset)) { _fun00002_ip = 59; continue _fun00001 }
 52:
            oscard = _closure1_slot5;
 59:
            michal = entity.padding;
            if(!(michal === offset)) { _fun00002_ip = 75; continue _fun00001 }
 68:
            michal = _closure1_slot4;
 75:
            verify = _closure1_slot2;
            zuuluu = verify.roundToNearestPixel;
            yankee = 2;
            entity = yankee * michal;
            entity = report + entity;
            zuuluu = zuuluu.bind(verify)(entity);
            report = verify.roundToNearestPixel;
            entity = yankee * michal;
            entity = oscard + entity;
            report = report.bind(verify)(entity);
            oscard = verify.roundToNearestPixel;
            entity = global;
            romeon = entity.Math;
            entity = romeon.min;
            entity = entity.bind(romeon)(zuuluu, report);
            entity = entity / yankee;
            oscard = oscard.bind(verify)(entity);
            entity = {'shape': null, 'x': 0, 'y': 0};
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            option = 3;
            option = yankee[option];
            option = verify.bind(offset)(option);
            option = option.CutoutShape;
            option = option.RoundedRect;
            entity['shape'] = option;
            entity['width'] = zuuluu;
            entity['height'] = report;
            entity['cornerRadius'] = oscard;
            oscard = 'top-right';
            if(!(oscard !== golfie)) { _fun00002_ip = 262; continue _fun00001 }
 232:
            oscard = tangon - zuuluu;
            oscard = oscard + michal;
            entity['x'] = oscard;
            report = tangon - report;
            report = report + michal;
            entity['y'] = report;
            _fun00002_ip = 285; continue _fun00001;
 262:
            zuuluu = tangon - zuuluu;
            zuuluu = zuuluu + michal;
            entity['x'] = zuuluu;
            michal = -michal;
            entity['y'] = michal;
 285:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();