// app/modules/avatar_decorations/native/AvatarDecorationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DECORATION_TO_AVATAR_RATIO;
    var _closure1_slot3 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/avatar_decorations/native/AvatarDecorationUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getDecorationSizeForAvatarSize
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = 'number';
            entity = typeof tangon;
            if(!(michal === entity)) { _fun00002_ip = 27; continue _fun00001 }
 14:
            entity = _closure1_slot3;
            entity = tangon * entity;
            _fun00002_ip = 70; continue _fun00001;
 27:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 1;
            report = report[zuuluu];
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)(report);
            zuuluu = zuuluu.AVATAR_SIZE_MAP;
            zuuluu = zuuluu[tangon];
            michal = _closure1_slot3;
            entity = zuuluu * michal;
 70:
            return entity;
        }
    };
    zuuluu['getDecorationSizeForAvatarSize'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getDecorationCutoutForAvatarCutout
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            golfie = argBar;
            var _closure2_slot0 = golfie;
            report = null;
            entity = oscard;
            if(!(report != entity)) { _fun00004_ip = 153; continue _fun00003 }
 24:
            michal = {};
            zuuluu = oscard.direction;
            michal['direction'] = zuuluu;
            zuuluu = oscard.radius;
            michal['radius'] = zuuluu;
            option = oscard.inset;
            verify = report != option;
            zuuluu = 0;
            if(!verify) { _fun00004_ip = 66; continue _fun00003 }
 63:
            zuuluu = option;
 66:
            zuuluu = zuuluu + golfie;
            michal['inset'] = zuuluu;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 1;
            golfie = golfie[zuuluu];
            zuuluu = undefined;
            golfie = option.bind(zuuluu)(golfie);
            golfie = golfie.CutoutType;
            golfie = golfie.RECTANGULAR;
            michal['imageType'] = golfie;
            oscard = oscard.nativeCutouts;
            report = report == oscard;
            if(report) { _fun00004_ip = 145; continue _fun00003 }
 130:
            report = oscard.map;
            tangon = function(argFoo) {
                michal = argFoo;
                entity = {};
                golfie = entity;
                oscard = michal;
                zuuluu = copyDataProperties(golfie, oscard);
                tangon = michal.x;
                zuuluu = _closure2_slot0;
                report = tangon + zuuluu;
                tangon = 'x';
                entity[tangon] = report;
                michal = michal.y;
                zuuluu = michal + zuuluu;
                michal = 'y';
                entity[michal] = zuuluu;
                return entity;
            };
            zuuluu = report.bind(oscard)(tangon);
 145:
            michal['nativeCutouts'] = zuuluu;
            entity = michal;
 153:
            return entity;
        }
    };
    zuuluu['getDecorationCutoutForAvatarCutout'] = tangon;
    michal = function(argFoo) { // Original name: openAvatarDecorationActionSheet
        entity = argFoo;
        verify = entity.user;
        option = entity.guildId;
        golfie = entity.currentAvatarDecoration;
        michal = entity.analyticsLocations;
        oscard = _closure1_slot1;
        zuuluu = _closure1_slot2;
        report = 2;
        offset = zuuluu[report];
        entity = undefined;
        yankee = oscard.bind(entity)(offset);
        offset = yankee.hideActionSheet;
        offset = offset.bind(yankee)();
        report = zuuluu[report];
        oscard = oscard.bind(entity)(report);
        report = oscard.openLazy;
        offset = _closure1_slot0;
        tangon = 4;
        tangon = zuuluu[tangon];
        offset = offset.bind(entity)(tangon);
        tangon = 3;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = offset.bind(entity)(tangon, zuuluu);
        zuuluu = {};
        zuuluu['user'] = verify;
        zuuluu['guildId'] = option;
        zuuluu['currentAvatarDecoration'] = golfie;
        zuuluu['analyticsLocations'] = michal;
        michal = 'Edit Avatar Decoration';
        michal = report.bind(oscard)(tangon, michal, zuuluu);
        return entity;
    };
    zuuluu['openAvatarDecorationActionSheet'] = michal;
    return entity;
})();