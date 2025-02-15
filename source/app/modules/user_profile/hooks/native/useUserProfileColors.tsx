// app/modules/user_profile/hooks/native/useUserProfileColors.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/hooks/native/useUserProfileColors.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useUserProfileColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscar = entity.theme;
            options = entity.primaryColor;
            backup = entity.secondaryColor;
            romeo = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 1;
            entity = mike[entity];
            verify = undefined;
            entity = romeo.bind(verify)(entity);
            yankee = entity.bind(verify)();
            tango = {};
            report = _closure1_slot0;
            golf = 2;
            entity = mike[golf];
            kilo = report.bind(verify)(entity);
            foxtrot = kilo.useToken;
            entity = 3;
            offset = mike[entity];
            offset = romeo.bind(verify)(offset);
            offset = offset.colors;
            offset = offset.BG_BASE_SECONDARY;
            offset = foxtrot.bind(kilo)(offset, yankee);
            tango['gradientFallbackBackground'] = offset;
            offset = mike[golf];
            kilo = report.bind(verify)(offset);
            foxtrot = kilo.useToken;
            offset = mike[entity];
            offset = romeo.bind(verify)(offset);
            offset = offset.colors;
            offset = offset.BG_BASE_SECONDARY;
            offset = foxtrot.bind(kilo)(offset, yankee);
            tango['gradientSecondaryBackground'] = offset;
            offset = mike[golf];
            kilo = report.bind(verify)(offset);
            foxtrot = kilo.useToken;
            offset = mike[entity];
            offset = romeo.bind(verify)(offset);
            offset = offset.colors;
            offset = offset.BG_BASE_SECONDARY;
            offset = foxtrot.bind(kilo)(offset, yankee);
            tango['avatarBackground'] = offset;
            golf = mike[golf];
            offset = report.bind(verify)(golf);
            golf = offset.useToken;
            entity = mike[entity];
            entity = romeo.bind(verify)(entity);
            entity = entity.colors;
            entity = entity.BG_SURFACE_RAISED;
            entity = golf.bind(offset)(entity, yankee);
            tango['containerBackground'] = entity;
            entity = 4;
            entity = mike[entity];
            yankee = report.bind(verify)(entity);
            offset = yankee.useStateFromStores;
            entity = _closure1_slot3;
            golf = new Array(1);
            golf[0] = entity;
            entity = function() {
                entity = _closure1_slot3;
                entity = entity.syncProfileThemeWithUserTheme;
                return entity;
            };
            entity = offset.bind(yankee)(golf, entity);
            offset = 5;
            mike = mike[offset];
            report = report.bind(verify)(mike);
            mike = report.useProfileThemeValues;
            kilo = mike.bind(report)(oscar);
            report = null;
            mike = report == kilo;
            if(entity) { _fun00002_ip = 335; continue _fun00001 }
 322:
            golf = undefined;
            if(mike) { _fun00002_ip = 333; continue _fun00001 }
 327:
            golf = kilo.overlay;
 333:
            _fun00002_ip = 349; continue _fun00001;
 335:
            entity = undefined;
            if(mike) { _fun00002_ip = 346; continue _fun00001 }
 340:
            entity = kilo.overlaySyncedWithUserTheme;
 346:
            golf = entity;
 349:
            entity = tango;
            if(!(report != options)) { _fun00002_ip = 562; continue _fun00001 }
 359:
            entity = tango;
            if(!(report != backup)) { _fun00002_ip = 562; continue _fun00001 }
 369:
            entity = tango;
            if(!(report != kilo)) { _fun00002_ip = 562; continue _fun00001 }
 379:
            entity = tango;
            if(!(report != golf)) { _fun00002_ip = 562; continue _fun00001 }
 389:
            mike = {};
            result = mike;
            output = tango;
            tango = copyDataProperties(result, output);
            tango = report == kilo;
            oscar = undefined;
            if(tango) { _fun00002_ip = 416; continue _fun00001 }
 410:
            oscar = kilo.sectionBox;
 416:
            tango = 'containerBackground';
            mike[tango] = oscar;
            foxtrot = _closure1_slot0;
            romeo = _closure1_slot2;
            tango = 6;
            oscar = romeo[tango];
            yankee = foxtrot.bind(verify)(oscar);
            oscar = yankee.int2hex;
            romeo = romeo[offset];
            foxtrot = foxtrot.bind(verify)(romeo);
            romeo = foxtrot.calculateOverlayedColor;
            sizing = report == kilo;
            report = undefined;
            if(sizing) { _fun00002_ip = 481; continue _fun00001 }
 475:
            report = kilo.overlay;
 481:
            report = romeo.bind(foxtrot)(backup, report);
            oscar = oscar.bind(yankee)(report);
            report = 'gradientSecondaryBackground';
            mike[report] = oscar;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            tango = zulu[tango];
            report = oscar.bind(verify)(tango);
            tango = report.int2hex;
            zulu = zulu[offset];
            oscar = oscar.bind(verify)(zulu);
            zulu = oscar.calculateOverlayedColor;
            zulu = zulu.bind(oscar)(options, golf);
            tango = tango.bind(report)(zulu);
            zulu = 'avatarBackground';
            mike[zulu] = tango;
            entity = mike;
 562:
            return entity;
        }
    };
    zulu['useUserProfileColors'] = mike;
    return entity;
})();