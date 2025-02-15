// app/modules/messages/native/renderer/ExplicitMediaUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MessageAttachmentFlags;
    var _closure1_slot3 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/ExplicitMediaUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz) { // Original name: getAttachmentObscurityProps
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscar = argBar;
            tango = argBaz;
            golf = entity.spoiler;
            offset = entity.flags;
            mike = entity.content_scan_version;
            options = undefined;
            if(!(options === mike)) { _fun00002_ip = 52; continue _fun00001 }
 32:
            mike = entity.contentScanVersion;
            report = undefined;
            if(!(report !== mike)) { _fun00002_ip = 50; continue _fun00001 }
 44:
            report = entity.contentScanVersion;
 50:
            _fun00002_ip = 58; continue _fun00001;
 52:
            report = entity.content_scan_version;
 58:
            mike = tango;
            if(!tango) { _fun00002_ip = 98; continue _fun00001 }
 64:
            zulu = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 2;
            entity = verify[entity];
            zulu = zulu.bind(options)(entity);
            entity = zulu.isPendingScanVersion;
            mike = entity.bind(zulu)(report);
 98:
            zulu = options !== offset;
            if(!zulu) { _fun00002_ip = 150; continue _fun00001 }
 105:
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            report = 3;
            report = yankee[report];
            verify = verify.bind(options)(report);
            report = verify.hasFlag;
            entity = _closure1_slot3;
            entity = entity.CONTAINS_EXPLICIT_MEDIA;
            zulu = report.bind(verify)(offset, entity);
 150:
            if(!tango) { _fun00002_ip = 185; continue _fun00001 }
 153:
            verify = _closure1_slot2;
            report = verify.get;
            entity = 'obscure_blur_effect_enabled';
            entity = report.bind(verify)(entity);
            if(entity) { _fun00002_ip = 182; continue _fun00001 }
 179:
            entity = zulu;
 182:
            tango = entity;
 185:
            entity = {};
            zulu = oscar;
            if(!zulu) { _fun00002_ip = 199; continue _fun00001 }
 193:
            report = true;
            zulu = report === golf;
 199:
            entity['isSpoiler'] = zulu;
            zulu = '';
            report = zulu;
            if(!oscar) { _fun00002_ip = 291; continue _fun00001 }
 214:
            oscar = true;
            report = zulu;
            if(!(oscar === golf)) { _fun00002_ip = 291; continue _fun00001 }
 223:
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            oscar = 4;
            golf = yankee[oscar];
            golf = offset.bind(options)(golf);
            verify = golf.intl;
            golf = verify.string;
            oscar = yankee[oscar];
            oscar = offset.bind(options)(oscar);
            oscar = oscar.t;
            oscar = oscar.F+x38P;
            golf = golf.bind(verify)(oscar);
            oscar = golf.toUpperCase;
            report = oscar.bind(golf)();
 291:
            entity['spoiler'] = report;
            entity['obscure'] = tango;
            if(!tango) { _fun00002_ip = 362; continue _fun00001 }
 304:
            golf = _closure1_slot0;
            verify = _closure1_slot1;
            tango = 4;
            report = verify[tango];
            report = golf.bind(options)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = verify[tango];
            tango = golf.bind(options)(tango);
            tango = tango.t;
            tango = tango.SpxcUV;
            zulu = report.bind(oscar)(tango);
 362:
            entity['obscureDescription'] = zulu;
            entity['obscureAwaitingScan'] = mike;
            return entity;
        }
    };
    zulu['getAttachmentObscurityProps'] = tango;
    tango = function(argFoo) { // Original name: getUnfurledMediaItemObscurityProps
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            verify = zulu.mediaItem;
            golf = zulu.isSpoilered;
            mike = zulu.isAuthorBot;
            entity = zulu.shouldObscureSpoiler;
            oscar = zulu.shouldObscureExplicitMedia;
            report = verify.contentScanMetadata;
            mike = !mike;
            if(!mike) { _fun00004_ip = 81; continue _fun00003 }
 45:
            options = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 2;
            tango = tango[zulu];
            zulu = undefined;
            tango = options.bind(zulu)(tango);
            zulu = tango.isPendingScan;
            mike = zulu.bind(tango)(report);
 81:
            if(!golf) { _fun00004_ip = 87; continue _fun00003 }
 84:
            golf = entity;
 87:
            yankee = _closure1_slot0;
            romeo = _closure1_slot1;
            offset = 2;
            entity = romeo[offset];
            options = undefined;
            report = yankee.bind(options)(entity);
            zulu = report.isMediaObscured;
            entity = {};
            offset = romeo[offset];
            offset = yankee.bind(options)(offset);
            offset = offset.ObscuredMediaTypes;
            offset = offset.GenericMedia;
            entity['type'] = offset;
            entity['media'] = verify;
            report = zulu.bind(report)(entity, oscar);
            entity = {};
            entity['isSpoiler'] = golf;
            oscar = null;
            if(!golf) { _fun00004_ip = 233; continue _fun00003 }
 168:
            yankee = _closure1_slot0;
            romeo = _closure1_slot1;
            golf = 4;
            verify = romeo[golf];
            verify = yankee.bind(options)(verify);
            offset = verify.intl;
            verify = offset.string;
            golf = romeo[golf];
            golf = yankee.bind(options)(golf);
            golf = golf.t;
            golf = golf.F+x38P;
            verify = verify.bind(offset)(golf);
            golf = verify.toUpperCase;
            oscar = golf.bind(verify)();
 233:
            entity['spoilerDescription'] = oscar;
            entity['isObscured'] = report;
            zulu = null;
            if(!report) { _fun00004_ip = 303; continue _fun00003 }
 248:
            golf = _closure1_slot0;
            verify = _closure1_slot1;
            tango = 4;
            report = verify[tango];
            report = golf.bind(options)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = verify[tango];
            tango = golf.bind(options)(tango);
            tango = tango.t;
            tango = tango.SpxcUV;
            zulu = report.bind(oscar)(tango);
 303:
            entity['obscureDescription'] = zulu;
            entity['obscureAwaitingScan'] = mike;
            return entity;
        }
    };
    zulu['getUnfurledMediaItemObscurityProps'] = tango;
    mike = function() { // Original name: getAttachmentObscurityDefaults
        entity = {'isSpoiler': false, 'spoiler': ''};
        return entity;
    };
    zulu['getAttachmentObscurityDefaults'] = mike;
    return entity;
})();