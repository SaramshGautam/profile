import { Fragment } from 'react';
import { AiOutlineBook } from 'react-icons/ai';
import { SanitizedPublication } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

const PublicationCard = ({
  publications,
  loading,
}: {
  publications: SanitizedPublication[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < publications.length; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="px-4">
                  <div className="text-center w-full">
                    <h2 className="mb-2">
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div>
                      {skeleton({
                        widthCls: 'w-20',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-20',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                    <div>
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mb-2 mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderPublications = () => {
    // A lone publication spans the full row with the image beside the text.
    const featured = publications.length === 1;

    return publications.map((item, index) => {
      const hasLink = Boolean(item.link);
      const Wrapper = hasLink ? 'a' : 'div';
      const wrapperProps = hasLink
        ? { href: item.link, target: '_blank', rel: 'noreferrer' }
        : {};

      return (
        <Wrapper
          className={`card shadow-md card-sm bg-base-100 overflow-hidden group transition-shadow duration-300 hover:shadow-xl ${
            hasLink ? 'cursor-pointer' : ''
          } ${featured ? 'md:col-span-2 md:flex-row' : ''}`}
          key={index}
          {...wrapperProps}
        >
          {item.imageUrl && (
            <figure
              className={`relative w-full aspect-[16/10] overflow-hidden bg-base-200 shrink-0 ${
                featured ? 'md:w-1/2 md:aspect-auto md:min-h-[20rem]' : ''
              }`}
            >
              <LazyImage
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
                placeholder={skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-full',
                  shape: '',
                })}
              />
            </figure>
          )}
          <div
            className={`relative p-6 sm:p-8 w-full flex flex-col justify-center ${
              item.conferenceName || item.journalName ? 'pt-14 sm:pt-14' : ''
            }`}
          >
            {(item.conferenceName || item.journalName) && (
              <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-2">
                {item.conferenceName && (
                  <span className="badge badge-primary shadow-md font-semibold">
                    {item.conferenceName}
                  </span>
                )}
                {item.journalName && (
                  <span className="badge badge-neutral shadow-md">
                    {item.journalName}
                  </span>
                )}
              </div>
            )}
            <h2 className="font-semibold text-base-content text-base leading-snug mb-2">
              {item.title}
            </h2>
            {item.authors && (
              <p className="grow-0 text-base-content opacity-60 text-sm italic">
                {item.authors}
              </p>
            )}
            {item.description && (
              <p className="grow-0 mt-3 text-base-content opacity-80 text-sm text-justify leading-relaxed">
                {item.description}
              </p>
            )}
            {item.keywords && item.keywords.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="badge badge-outline badge-sm opacity-70"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
            {hasLink && (
              <div className="mt-4 text-sm font-medium text-primary">
                Read the paper →
              </div>
            )}
          </div>
        </Wrapper>
      );
    });
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-200 shadow-xl border border-base-300">
          <div className="card-body p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <AiOutlineBook className="text-2xl" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                      : 'Publications'}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Showcasing ${publications.length} publications`}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderPublications()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PublicationCard;
