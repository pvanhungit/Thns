import { toast, type Id, type ToastContent, type ToastOptions } from 'react-toastify';

export const toastUpdate = {
  loading: <TData = unknown>(
    content: ToastContent<TData>,
    options?: ToastOptions<TData> | undefined,
  ): Id => toast.loading(content, options),

  success: <TData = unknown>(
    content: ToastContent<TData>,
    options?: ToastOptions<TData> | undefined,
  ): Id => toast.success(content, options),
  /* 
  var promise: typeof handlePromise;
  var success: <TData = unknown>(content: ToastContent<TData>, options?: ToastOptions<TData> | undefined) => Id;
  var info: <TData = unknown>(content: ToastContent<TData>, options?: ToastOptions<TData> | undefined) => Id;
  var error: <TData = unknown>(content: ToastContent<TData>, options?: ToastOptions<TData> | undefined) => Id;
  var warning: <TData = unknown>(content: ToastContent<TData>, options?: ToastOptions<TData> | undefined) => Id;
  var warn: <TData = unknown>(content: ToastContent<TData>, options?: ToastOptions<TData> | undefined) => Id;
  var dark: (content: ToastContent, options?: ToastOptions<unknown> | undefined) => Id;
  var dismiss: {
      (params: RemoveParams): void;
      (params?: Id | undefined): void;
  };
  var clearWaitingQueue: typeof import("./store").clearWaitingQueue;
  var isActive: typeof isToastActive;
  var update: <TData = unknown>(toastId: Id, options?: UpdateOptions<TData>) => void;
  var done: (id: Id) => void;
  var onChange: typeof import("./store").onChange;
  var play: (opts?: IdOpts | undefined) => void;
  var pause: (opts?: IdOpts | undefined) => void; 
  */
};
