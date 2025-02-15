// app/modules/avatar_decorations/native/AvatarDecorationUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.DECORATION_TO_AVATAR_RATIO;
    var _closure1_slot3 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/avatar_decorations/native/AvatarDecorationUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getDecorationSizeForAvatarSize
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = 'number';
            entity = typeof tango;
            if(!(mike === entity)) { _fun00002_ip = 27; continue _fun00001 }
 14:
            entity = _closure1_slot3;
            entity = tango * entity;
            _fun00002_ip = 70; continue _fun00001;
 27:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 1;
            report = report[zulu];
            zulu = undefined;
            zulu = oscar.bind(zulu)(report);
            zulu = zulu.AVATAR_SIZE_MAP;
            zulu = zulu[tango];
            mike = _closure1_slot3;
            entity = zulu * mike;
 70:
            return entity;
        }
    };
    zulu['getDecorationSizeForAvatarSize'] = tango;
    tango = function(argFoo, argBar) { // Original name: getDecorationCutoutForAvatarCutout
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscar = argFoo;
            golf = argBar;
            var _closure2_slot0 = golf;
            report = null;
            entity = oscar;
            if(!(report != entity)) { _fun00004_ip = 153; continue _fun00003 }
 24:
            mike = {};
            zulu = oscar.direction;
            mike['direction'] = zulu;
            zulu = oscar.radius;
            mike['radius'] = zulu;
            options = oscar.inset;
            verify = report != options;
            zulu = 0;
            if(!verify) { _fun00004_ip = 66; continue _fun00003 }
 63:
            zulu = options;
 66:
            zulu = zulu + golf;
            mike['inset'] = zulu;
            options = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 1;
            golf = golf[zulu];
            zulu = undefined;
            golf = options.bind(zulu)(golf);
            golf = golf.CutoutType;
            golf = golf.RECTANGULAR;
            mike['imageType'] = golf;
            oscar = oscar.nativeCutouts;
            report = report == oscar;
            if(report) { _fun00004_ip = 145; continue _fun00003 }
 130:
            report = oscar.map;
            tango = function(argFoo) {
                mike = argFoo;
                entity = {};
                golf = entity;
                oscar = mike;
                zulu = copyDataProperties(golf, oscar);
                tango = mike.x;
                zulu = _closure2_slot0;
                report = tango + zulu;
                tango = 'x';
                entity[tango] = report;
                mike = mike.y;
                zulu = mike + zulu;
                mike = 'y';
                entity[mike] = zulu;
                return entity;
            };
            zulu = report.bind(oscar)(tango);
 145:
            mike['nativeCutouts'] = zulu;
            entity = mike;
 153:
            return entity;
        }
    };
    zulu['getDecorationCutoutForAvatarCutout'] = tango;
    mike = function(argFoo) { // Original name: openAvatarDecorationActionSheet
        entity = argFoo;
        verify = entity.user;
        options = entity.guildId;
        golf = entity.currentAvatarDecoration;
        mike = entity.analyticsLocations;
        oscar = _closure1_slot1;
        zulu = _closure1_slot2;
        report = 2;
        offset = zulu[report];
        entity = undefined;
        yankee = oscar.bind(entity)(offset);
        offset = yankee.hideActionSheet;
        offset = offset.bind(yankee)();
        report = zulu[report];
        oscar = oscar.bind(entity)(report);
        report = oscar.openLazy;
        offset = _closure1_slot0;
        tango = 4;
        tango = zulu[tango];
        offset = offset.bind(entity)(tango);
        tango = 3;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = offset.bind(entity)(tango, zulu);
        zulu = {};
        zulu['user'] = verify;
        zulu['guildId'] = options;
        zulu['currentAvatarDecoration'] = golf;
        zulu['analyticsLocations'] = mike;
        mike = 'Edit Avatar Decoration';
        mike = report.bind(oscar)(tango, mike, zulu);
        return entity;
    };
    zulu['openAvatarDecorationActionSheet'] = mike;
    return entity;
})();